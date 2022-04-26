import React from 'react'
import ManageCategories from '../components/ManageCategories';
import ManageProducts from '../components/ManageProducts';

const URL = 'http://localhost/verkkokauppabackend/';

export default function Manage() {
    return (
        <div>
            <ManageCategories url={URL} />
            <ManageProducts url={URL} />
        </div>
    )
}