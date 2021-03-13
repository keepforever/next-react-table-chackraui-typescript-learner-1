import React from 'react';
import { Box, Heading, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption } from '@chakra-ui/react';
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
                accessor: 'col1' as const // accessor is the "key" in the data
            },

            {
                Header: 'Column 2',
                accessor: 'col2' as const
            }
        ],

        []
    );

    return { columns, data };
};

const MyTablePage = () => {
    const { columns, data } = useTableData();

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

    return (
        <Box mb={8} w="full">
            <Heading as="h1">Hello Table</Heading>
            <Table {...getTableProps()}>
                <Thead>
                    {headerGroups.map((headerGroup) => (
                        <Tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <Th {...column.getHeaderProps()}>{column.render('Header')}</Th>
                            ))}
                        </Tr>
                    ))}
                </Thead>

                <Tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <Tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>;
                                })}
                            </Tr>
                        );
                    })}
                </Tbody>
            </Table>
        </Box>
    );
};

export default MyTablePage;
