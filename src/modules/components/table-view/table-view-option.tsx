import React, { useCallback } from 'react';
import styles from './table-view-option.module.less';
import cls from 'classnames';
import { DataOptionProps } from './table-view.types';
import debounceUtil from '../../base/utils/debounce-util';
import { Icon } from '@opensumi/ide-core-browser/lib/components';
import { Input } from '@opensumi/ide-components';

export const TableViewOption = (props: DataOptionProps) => {
  const {
    //按钮展示
    search,
    refresh,
    filter,
    //控制按钮开启关闭
    enableFilterSearch,
    optionView,
    //按钮操作
    setSearchWord,
    onFilter,
    onRefresh,
    onFilterSearch,
  } = props;
  const location = optionView?.location;
  const customView = optionView?.view;

  const debounceCalcValue = useCallback(
    debounceUtil((keyword: string) => {
      setSearchWord(keyword);
    }, 300),
    [],
  );

  const handleSearchChange = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      let inputValue = ev.target.value;
      debounceCalcValue(inputValue);
    },
    [search],
  );

  const renderSearch = useCallback(() => {
    return search ? (
      <div className={cls(styles['opt-item'])}>
        <Input
          placeholder={'搜索'}
          addonAfter={<Icon icon={'search'} className={cls('kt-clickable-icon')} />}
          size={'small'}
          onChange={(ev) => handleSearchChange(ev)}
        />
      </div>
    ) : null;
  }, [search]);

  const renderRefresh = useCallback(() => {
    return refresh ? (
      <div className={styles['opt-item-icon']} onClick={onRefresh}>
        {/*<VscRefresh/>*/}
        <Icon
          tooltip={'刷新'}
          disabled={false}
          icon={'sync'}
          //  onClick={loading || disabled ? noop : onClick}
          className={cls('kt-clickable-icon', styles['file_icon'])}
        />
      </div>
    ) : null;
  }, [refresh, onRefresh]);

  const renderFilter = useCallback(() => {
    return filter ? (
      <div className={styles['opt-item-icon']} onClick={onFilter}>
        {/*<VscFilter/>*/}
        <Icon
          tooltip={'过滤'}
          disabled={false}
          icon={'filter'}
          //  onClick={loading || disabled ? noop : onClick}
          className={cls('kt-clickable-icon', styles['file_icon'])}
        />
      </div>
    ) : null;
  }, [filter, enableFilterSearch]);

  const renderFilterSearch = useCallback(() => {
    return filter ? (
      <div className={styles['opt-item-icon']} onClick={onFilterSearch}>
        {/*<VscFilter/>*/}
        <Icon
          tooltip={'search'}
          disabled={!enableFilterSearch}
          icon={'search'}
          //  onClick={loading || disabled ? noop : onClick}
          className={cls('kt-clickable-icon', styles['file_icon'])}
        />
      </div>
    ) : null;
  }, [filter, enableFilterSearch, onFilterSearch]);

  return (
    <div className={styles['table-view-opt-container']}>
      {location === 'start' ? customView : null}
      {renderSearch()}
      {location === 'afterSearch' ? customView : null}
      {renderRefresh()}
      {renderFilter()}
      {renderFilterSearch()}
      {location === 'end' ? customView : null}
    </div>
  );
};
