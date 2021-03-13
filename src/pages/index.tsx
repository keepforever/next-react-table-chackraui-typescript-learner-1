import { Box } from '@chakra-ui/react';

import SomeText from '../components/SomeText';
import SomeImage from '../components/SomeImage';
import CTASection from '../components/CTASection';
import MyGradientBox from '../components/MyGradientBox';

const Home = () => {
    return (
        <Box mb={8} w="full">
            <CTASection />
            <MyGradientBox label="hello tool tip" />
        </Box>
    );
};

export default Home;
