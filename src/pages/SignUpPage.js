import { IconEyeOpen } from 'components/icon';
import React from 'react';
import styled from 'styled-components'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";

const schema = yup.object().shape({
    firstName: yup.string().min(3, 'First name must be over 3 character').required('First name none empty!'),
    lastName: yup.string().min(3, 'First name must be over 3 character').required('First name none empty!'),
    email: yup.string().email('Your email invalid').required('Email none empty!'),
    job: yup.string().required('Job none empty!'),
});

const SignUpPage = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
        resolver: yupResolver(schema),
    })



    const SignUpPageStyles = styled.div`
    min-height: 100dvh;
    padding: 40px;
    .logo {
        margin: 0 auto 30px;
    }
    .heading {
        text-align: center;
        color: ${props => props.theme.primary};
        font-weight: 700;
        font-size: 2rem;
        letter-spacing: 2px;
    }
    .form{
        padding: 0 3rem;
    }
    .field{
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }
    .inputGroup {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${props => props.theme.grayf1};
        padding: .8rem;
        border-radius: .3rem;
    }
    .input{
        width: 100%;
        background-color: transparent;
    }
    .email{
        font-weight: 700;
    }
    `
    return (
        <SignUpPageStyles>
            <div className="container">
                <img alt="monkey-blogging" srcset="/logo.png 2x" className='logo' />
                <h1 className="heading">Monkey Blogging</h1>
                <form className='form'>
                    <div className="field">
                        <label htmlFor="email" className='email'>Email</label>
                        <div className='inputGroup' >
                            <input id='email' type="text" className='input' placeholder='Your email'
                                {...register('email')} />
                            <IconEyeOpen></IconEyeOpen>
                        </div>
                        {errors?.email?.message && (
                            <p className="text-sm text-red-500">{errors.email.message}</p>
                        )}
                        {/* <p className="text-sm text-red-500">Hi everyone i'm khoa this is a bug</p> */}
                    </div>
                </form>
            </div>
        </SignUpPageStyles>
    );
};

export default SignUpPage;