/* eslint-disable react-refresh/only-export-components */
import AppActionBar from '../../../core/components/AppActionBar';
import AppTable from '../../../core/components/AppTable';
import { basicTableColumns, basicTableData } from '../../../core/fakedb/tables/basic-table';
import { rowSelectionTableColumn, rowSelecttionTableData } from '../../../core/fakedb/tables/row-selection-table';
import { fixedHeaderTableColumn, fixedHeaderTableData } from '../../../core/fakedb/tables/fixed-header-table';
import withLayout from '../../../core/components/AppLayout/withLayout';

function TablePage() {
	const onChange = (selectedRowKeys, selectedRows) => {
		console.info(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
	};
	return (
		<>
			<AppActionBar title="tables" styles={{ marginBottom: '10px' }} />

			<AppTable columns={basicTableColumns} dataSource={basicTableData} title="basic table" />

			<AppTable
				title="row selection table"
				columns={rowSelectionTableColumn}
				dataSource={rowSelecttionTableData}
				enableRowSelection={true}
				onChange={onChange}
				styles={{ marginTop: '10px' }}
			/>

			<AppTable
				columns={fixedHeaderTableColumn}
				dataSource={fixedHeaderTableData}
				title="fixed column table"
				scroll={{
					x: 1600,
				}}
				styles={{ marginTop: '10px' }}
			/>
		</>
	);
}

export default withLayout(TablePage);
