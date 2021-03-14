import React from 'react';
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, TableCaption } from '@chakra-ui/react';
import { useTable, Column } from 'react-table';
import axios from 'axios';

type UserType = {
    address: { street: string };
    company: { name: string };
    email: string;
    id: number;
    name: string;
    phone: string;
    username: string;
    website: string;
};

type ColumnType = { Header: string; accessor: string };

// type TableDataType = { columns: UserType[]; data: Array<UserType> };
type TableDataType = { columns: any; data: Array<UserType> };

const useTableData = (users: Array<UserType>): TableDataType => {
    const data = React.useMemo(() => users, []);

    const columns: Array<ColumnType> = React.useMemo(
        () => [
            ...Object.keys(users[0]).map((key: string) => {
                return {
                    Header: key,
                    accessor: key
                };
            })
        ],
        []
    );

    return { columns, data };
};

export async function getStaticProps(context: any) {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);

    return {
        props: {
            users: [
                ...res.data.map((u: UserType) => {
                    return {
                        ...u,
                        address: u.address.street,
                        company: u.company.name
                    };
                })
            ]
        }
    };
}

const MyTablePage = ({ users }: any) => {
    const { columns, data } = useTableData(users);
    // console.log('\n', '\n', `columns = `, columns, '\n', '\n');
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

    return (
        <Box mb={8} w="full" overflowX="scroll">
            <Heading as="h2">User Table</Heading>
            <Heading as="h4" size="sm">
                Fetched from https://jsonplaceholder.typicode.com/users
            </Heading>

            <Table {...getTableProps()}>
                <TableCaption>Some User Data From a Dummy API</TableCaption>
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
