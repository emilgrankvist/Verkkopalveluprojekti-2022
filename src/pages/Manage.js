import React from 'react'
import ManageCategories from '../components/ManageCategories';
import CategoryList from '../components/CategoryList';

const URL = 'http://localhost/verkkokauppabackend/';

export default function Manage() {
    return (
        <div>
            <ManageCategories url={URL} />
        </div>
    )
}