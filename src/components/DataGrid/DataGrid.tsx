import { useEffect, useState } from "react";
import jp from 'jsonpath';
import moment from 'moment';
import { getIsMobile } from '../../utils/methods';
import "./dataGrid.css"
import { DataObj, Columns } from "../../typings";

interface ITable {
    columns: Array<Columns>,
    data: Array<DataObj>,
    title?: Columns,
    subTitle?: Columns,
}

export const DataGrid = (props: ITable) => {

    const [isMobile, setIsMobile] = useState<boolean>(getIsMobile())

    // handle window resize
    useEffect(() => {
        const handleWindowResize = () => {
            setIsMobile(getIsMobile())
        };
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    });


    const getData = (key: string, obj: any, type: string) => {
        let value = jp.query(obj, `$.${key}`);
        return type === 'date' ? moment(value).format('MMM DD, YYYY') : value;
    }

    return <>
        {isMobile ?
            <>{props.data.map((item: any, index: number) => {
                //  cards for mobile view
                return <div key={index} className="card">

                    {props.columns.slice(0, 2).map((columnItem: any, columnIndex: number) => {
                        return <div key={columnIndex + index} style={{ width: '100%' }} >
                            <div style={{ display: 'block', width: '100%' }} className='elem'>
                                {columnIndex === 0 && props.title ?
                                    <span>  {getData(props.title.key, item, props.title.type)}</span>
                                    : columnIndex === 1 && props.subTitle ?
                                        <span>  {getData(props.subTitle.key, item, props.subTitle.type)}</span>
                                        : <span>  {getData(columnItem.key, item, columnItem.type)}</span>
                                }
                            </div>
                        </div>
                    })}
                </div>
            })}
            </> :
            <table style={{ width: 'inherit' }}>
                {/* table headings */}
                <thead>
                    <tr>
                        {props.columns.map((columnItem: Columns, columnIndex: number) => {
                            return <th key={columnIndex} className="table-row">
                                <h4>
                                    {columnItem.label}
                                </h4>
                            </th>
                        })}
                    </tr>
                </thead>
                {/* table body */}
                <tbody>
                    {props.data.map((item: any, index: number) => {
                        return <tr key={index} >
                            {props.columns.map((columnItem: any, columnIndex: number) => {
                                return <td key={columnIndex + item} className="table-row">
                                    <p>
                                        {getData(columnItem.key, item, columnItem.type)}
                                    </p>
                                </td>

                            })}
                        </tr>
                    })}
                </tbody>
            </table>
        }
    </>
}