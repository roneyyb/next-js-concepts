"use client"
import Modal from '@/components/modal'
import React from 'react'
import LoginForm from "../../../_components/form/Form";

export default function Login() {




    return <Modal  >
        <LoginForm onPressSubmit={(data) => {
            console.log("email", data)
        }} />
    </Modal>
}