"use client"
import React from 'react'
import { useQuery, gql } from '@apollo/client';
import { GET_ALL_QUOTES } from '@/datatypes/graphql/queries';


export default function GetQuotes() {




    const { loading, error, data } = useQuery(gql`${GET_ALL_QUOTES}`, { fetchPolicy: "no-cache" });



    if (loading) {
        return <div>{"Loading..."}</div>
    } else
        return (
            <div>
                Quotes
                {data.quotes.map((item) => <h3>{item.name + " --- " + item.by.firstName}</h3>)}
            </div>

        )
}
