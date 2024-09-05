"use client"
import { GET_ALL_QUOTES } from '@/datatypes/graphql/queries';
import { gql, useQuery } from '@apollo/client';
import React from 'react'

function HomePage() {

    const { loading, error, data } = useQuery(gql`${GET_ALL_QUOTES}`);
    console.log("Data", data)

    if (loading) {
        return <div>{"Loading ..."}</div>
    }
    return (
        <div>

        </div>
    )
}

export default HomePage
