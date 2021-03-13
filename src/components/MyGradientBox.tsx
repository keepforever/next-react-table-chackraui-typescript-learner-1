import { MouseEvent } from 'react';
import { Box, Tooltip, Button, useToast, Progress, Input } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { string, object } from 'yup';

type HelperImageProps = {
    label?: string;
};

interface MyMouseEvent extends MouseEvent {
    target: any;
}

const addSupportProfileValidationSchema = object().shape({
    email: string().email().required('Email is required'),
    password: string()
});

const initialFormikState = {
    email: '',
    password: ''
};

const MyGradientBox = ({ label }: HelperImageProps) => {
    const toast = useToast();
    const formik = useFormik({
        initialValues: initialFormikState,
        onSubmit: () => {},
        validationSchema: addSupportProfileValidationSchema,
        validateOnBlur: true,
        validateOnChange: false
    });

    const handleOnClick = (e: MyMouseEvent) => {
        e.preventDefault();
        toast({
            title: 'Time for Toast.',
            description: "You're toast is done",
            status: 'error',
            duration: 9000,
            isClosable: true
        });
    };

    return (
        <>
            <Box width="xl">
                <Input id="email" placeholder="email" onChange={formik.handleChange} />
                <Input id="password" placeholder="password" type="password" onChange={formik.handleChange} />
            </Box>

            <Box width="xl">
                <Progress size="md" isIndeterminate />
            </Box>
            <Box marginX={2}>
                <Tooltip hasArrow aria-label={label} label={label} placement="auto-end">
                    <Button
                        id="my-id"
                        onClick={handleOnClick}
                        size="lg"
                        colorScheme="twitter"
                        variant="outline"
                        bgGradient="linear(to-r, green.200, pink.500)"
                    >
                        This is A Button
                    </Button>
                </Tooltip>
            </Box>
        </>
    );
};

export default MyGradientBox;
