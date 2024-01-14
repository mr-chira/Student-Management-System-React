<TableBody>
  {stableSort(data, getComparator(order, orderBy))
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((row, index) => {
      const isItemSelected = isSelected(row[rowKey]);
      const labelId = `enhanced-table-checkbox-${index}`;

      return (
        <TableRow
          hover
          onClick={(event) => handleClick(event, row[rowKey])}
          role="checkbox"
          aria-checked={isItemSelected}
          tabIndex={-1}
          key={row[rowKey]}
          selected={isItemSelected}
        >
          {withCheckbox && (
            <TableCell padding="checkbox">
              <Checkbox
                checked={isItemSelected}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </TableCell>
          )}
          {columns.map((column) => (
            <TableCell key={column.id} align={column.numeric ? 'right' : 'left'}>
              {row[column.id]}
            </TableCell>
          ))}
        </TableRow>
      );
    })}
</TableBody>
