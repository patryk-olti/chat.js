import { Types } from 'mongoose';

type Props = {
    userId: Types.ObjectId,
    message: String
}

const SingleMessage = (props: Props) => {

    const { userId, message } = props;

    return (
        <div>
            <div> img </div>
            <div> mess </div>
        </div>
    )
}

export default SingleMessage;