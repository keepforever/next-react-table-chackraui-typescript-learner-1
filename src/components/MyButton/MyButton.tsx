import { MouseEvent } from 'react';
import { Button } from '@chakra-ui/react';

interface MyMouseEvent extends MouseEvent {
    target: any;
}

const MyButton = () => {
    const handleOnClick = (e: MyMouseEvent) => {
        e.preventDefault();
        console.log('\n', `hello MyButton.tsx `, '\n');
    };

    return (
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
    );
};

export default MyButton;
