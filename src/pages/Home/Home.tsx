import { useEffect, useState } from "react"
import axios from 'axios';
import { DataGrid } from "../../components"
import { DataObj, Columns } from '../../typings';
import './_/style/index.css';

export const Home = () => {
    const [data, setData] = useState<Array<DataObj>>([])

    useEffect(() => {
        axios.get('https://us-central1-fir-apps-services.cloudfunctions.net/transactions').then((response) => {
            setData(response.data.data)
        })
    }, [])

    const columns: Array<Columns> = [
        { label: 'Name', key: 'name', type: 'string' },
        { label: 'Date', key: 'date', type: 'date' },
        { label: 'Category', key: 'category', type: 'string' },
        { label: 'Amount', key: 'amount', type: 'number' },
        { label: 'Created At', key: 'created_at', type: 'date' }
    ];

    const title: Columns = { label: 'Name', key: 'name', type: 'string' };

    const subTitle: Columns = { label: 'Amount', key: 'amount', type: 'number' };

    return (
        <div className='container'>
            <div className='container'>
                <h3>Data Grid</h3>
            </div>

            <DataGrid data={data} columns={columns} title={title} subTitle={subTitle} />
        </div>
    );
}

