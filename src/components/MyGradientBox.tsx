import { MouseEvent } from 'react';
import { Box, Tooltip, Button, useToast, Progress, Input } from '@chakra-ui/react';

type HelperImageProps = {
    label?: string;
};

interface MyMouseEvent extends MouseEvent {
    target: any;
}

const MyGradientBox = ({ label }: HelperImageProps) => {
    const toast = useToast();

    const handleOnClick = (e: MyMouseEvent) => {
        e.preventDefault();
        console.log('\n', '\n', `my mouse event = `, (e.target as any).id, '\n', '\n');
        toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true
        });
    };
    return (
        <>
            <Box width="xl">
                <Input placeholder="Basic usage" />
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
