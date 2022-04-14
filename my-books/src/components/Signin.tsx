import { click } from "@testing-library/user-event/dist/click";
import {Button, Col, Input, Row} from "antd";
import { useRef } from "react";
import { loginReqType } from "../types";
import styles from "./Signin.module.css"

interface SigninProps {
    login: (reqData: loginReqType) => void;
}

 const Signin: React.FC<SigninProps> = ({login}) => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    return (
        <Row align="middle" className={styles.signin_row}>
            <Col span={24}>
                <Row className={styles.signin_contents}>
                    <Col span={12}>
                        <img src="/bg_signin.png" alt='signin' className={styles.signin_bg}/>
                    </Col>
                    <Col span={12}>
                        <div className={styles.signin_title}>My Books</div>
                        <div className={styles.signin_subtitle}>Please Note Your Opinion</div>
                        <div className={styles.signin_underline}/>
                        <div className={styles.email_title}>
                            Email
                            <span className={styles.required}> *</span>
                        </div>
                        <div className={styles.input_area}>
                            <Input 
                            placeholder="Email"
                            autoComplete="email"
                            name="email"
                            className={styles.input}
                            ref={emailRef}/>
                        </div>
                        <div className={styles.password_title}>
                            Password
                            <span className={styles.required}> *</span>
                        </div>
                        <div className={styles.input_area}>
                            <Input 
                            type='password'
                            autoComplete="current-password"
                            className={styles.input}
                            ref={passwordRef} />
                        </div>
                        <div className={styles.button_area}>
                            <Button size='large' className={styles.button}
                            onClick={click}>Sign in</Button>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    );

    function click() {
        const email = emailRef.current!
        const password = passwordRef.current!

        login({ email, password});
    }
};

export default Signin;