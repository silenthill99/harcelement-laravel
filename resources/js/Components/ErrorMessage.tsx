import React from 'react';

type Props = {
    message: string;
}

const ErrorMessage = ({message}: Props) => {
    return (
        <p className={"text-red-600"}>
            {message}
        </p>
    );
};

export default ErrorMessage;
