import { getUserId } from '@/app/lib/data';
import React from 'react';

const DetailsPage = async({params}) => {
    const {userId} = await params;

   const user = await getUserId(userId)
    console.log('user id', user);
    

    return (
        <div>
            <h2>Details Page</h2>
            <p>Name : {user.name}</p>
            <p>E-mail : {user.email}</p>
            <p>Role : {user.role}</p>
        </div>
    );
};

export default DetailsPage;