import React from 'react';
import {Button, Result} from "antd";
import {Link} from "react-router-dom";
import {Routes} from "../constants/routes";

const NotFound = (props) => (
    <Result
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={<Button type="primary"><Link to={Routes.HOME}>Ir al inicio</Link></Button>}
    />
);

export default NotFound;