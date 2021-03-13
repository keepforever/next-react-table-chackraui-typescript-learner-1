import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { useTable } from 'react-table';

const useTableData = () => {
    const data = React.useMemo(
        () => [
            {
                col1: 'Hello',
                col2: 'World'
            },
            {
                col1: 'react-table',
                col2: 'rocks'
            },
            {
                col1: 'whatever',
                col2: 'you want'
            }
        ],

        []
    );

    const columns = React.useMemo(
        () => [
            {
                Header: 'Column 1',
                accessor: 'col1' // accessor is the "key" in the data
            },

            {
                Header: 'Column 2',
                accessor: 'col2'
            }
        ],

        []
    );

    return { columns, data };
};

const Table = () => {
    const { columns, data } = useTableData();

    const tableInstance = useTable({ columns, data });

    return (
        <Box mb={8} w="full">
            <Heading as="h1">Hello Table</Heading>
        </Box>
    );
};

export default Table;
