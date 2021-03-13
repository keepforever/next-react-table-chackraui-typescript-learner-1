import { Box, Heading } from '@chakra-ui/react';
import CTASection from '../components/CTASection';
import MyGradientBox from '../components/MyGradientBox';
import AccessibleLink from '../components/AccessibleLink';

// import SomeText from '../components/SomeText';
// import SomeImage from '../components/SomeImage';

const Home = () => {
    return (
        <Box mb={8} w="full">
            <Heading as="h1">hello world</Heading>
            <CTASection />
            <MyGradientBox label="hello tool tip" />
            <AccessibleLink href="/table">Table</AccessibleLink>
        </Box>
    );
};

export default Home;
