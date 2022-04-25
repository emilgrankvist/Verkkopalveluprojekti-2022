import React from 'react'
import ManageCategories from '../components/ManageCategories';
import CategoryList from '../components/CategoryList';

export default function Manage() {
    return (
        <div>
            <CategoryList />
            <ManageCategories />
        </div>
    )
}