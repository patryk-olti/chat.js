import { useEffect } from 'react';

import { Types } from 'mongoose';

type Props = {
    userId: Types.ObjectId,
    message: String
}

const SingleMessage = (props: Props) => {

    const { userId, message } = props;

    useEffect(() => {
        console.log(message);
    }, [message])

    return (
        <div>
            <div> img </div>
            <div> {message} </div>
        </div>
    )
}

export default SingleMessage;