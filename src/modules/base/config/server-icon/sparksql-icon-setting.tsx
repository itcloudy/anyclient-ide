import { INodeIcon } from '../server-icon.config';
import { SparkSQL } from '../../../icons/server';
import { ICON_RESOURCE_PATH } from '../../icon';
import { Postgres_base64 } from '../../../icons/node';
import React from 'react';

export const SparkSQLIconSetting:INodeIcon ={
  icon: <SparkSQL />,
  iconPath: ICON_RESOURCE_PATH.Postgresql,
  base64: Postgres_base64,
}
