import { Box, Tooltip, Button, useToast, Progress, Input } from '@chakra-ui/react';

const Login = ({ onSubmit }: any) => {
    function handleSubmit(event: any) {
        event.preventDefault();
        const { username, password } = event.target.elements;

        onSubmit({
            username: username.value,
            password: password.value
        });
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username-field">Username</label>
                <Box width="xl">
                    <Input id="username-field" name="username" type="text" />
                </Box>
            </div>

            <div>
                <label htmlFor="password-field">Password</label>
                <Box width="xl">
                    <Input id="password-field" name="password" type="password" />
                </Box>
            </div>
            <div>
                <Button type="submit">Submit</Button>
            </div>
        </form>
    );
};

export default Login;
