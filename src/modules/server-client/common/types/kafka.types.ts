import { GroupOverview } from 'kafkajs';
import { ConnectQuery } from '../../../local-store-db/common';
import { IBaseService, IBaseServiceClient, IQueryResult } from '../index';

export const IKafkaServiceToken = Symbol('IKafkaServiceToken');
export const IKafkaServiceRPCToken = Symbol('IKafkaServiceRPCToken');

export const IKafkaClientServicePath = 'IKafkaClientServicePath';
export const IKafkaClientRPCPath = 'IKafkaClientRPCPath';

export const IKafkaClientService = Symbol('IKafkaClientService');
export const IKafkaClientRPC = Symbol('IKafkaClientRPC');

export interface IBroker {
  nodeId: number;
  host: string;
  port: number;
}

export interface TopicCreateParam {
  topic: string;
  numPartitions?: number;
  replicationFactor?: number;
}

export interface IMessageBase {
  key?: string | null;
  value: string;
  partition?: number;
  //headers?: IHeaders
  timestamp?: string;
}

export interface IMessage extends IMessageBase {
  offset?: number;
}

export interface IPartition {
  partitionErrorCode: number;
  partitionId: number;
  leader: number;
  replicas: number[];
  isr: number[];
  offlineReplicas?: number[];
}

export type IQueryStart = 'Newest' | 'Oldest';

export interface IKafkaService extends IBaseService {
  showMessage(): void;

  onMessage: (message: string) => void;

  ping(connect: ConnectQuery): Promise<IQueryResult>;

  showTopics(connect: ConnectQuery): Promise<IQueryResult<string[]>>;

  deleteTopic(connect: ConnectQuery, topics: string[]): Promise<IQueryResult>;

  createTopic(connect: ConnectQuery, topicCreateParam: TopicCreateParam): Promise<IQueryResult>;

  showGroups(connect: ConnectQuery): Promise<IQueryResult<GroupOverview[]>>;

  showBrokers(connect: ConnectQuery): Promise<IQueryResult<IBroker[]>>;

  showPartitions(connect: ConnectQuery, topic: string): Promise<IQueryResult<IPartition[]>>;

  queryNewData(
    connect: ConnectQuery,
    topic: string,
    partition: string,
    size: number,
    queryStart: IQueryStart,
  ): Promise<IQueryResult<IMessage[]>>;

  sendOneMessage(connect: ConnectQuery, topic: string, message: IMessageBase): Promise<IQueryResult>;
}

export interface IKafkaServiceClient extends IBaseServiceClient {
  showMessage(message: string): void;

  ping(connect: ConnectQuery): Promise<IQueryResult>;

  showTopics(connect: ConnectQuery): Promise<IQueryResult<string[]>>;

  deleteTopic(connect: ConnectQuery, topics: string[]): Promise<IQueryResult>;

  createTopic(connect: ConnectQuery, topicCreateParam: TopicCreateParam): Promise<IQueryResult>;

  showGroups(connect: ConnectQuery): Promise<IQueryResult<GroupOverview[]>>;

  showBrokers(connect: ConnectQuery): Promise<IQueryResult<IBroker[]>>;

  showPartitions(connect: ConnectQuery, topic: string): Promise<IQueryResult<IPartition[]>>;

  sendOneMessage(connect: ConnectQuery, topic: string, message: IMessageBase): Promise<IQueryResult>;

  queryNewData(
    connect: ConnectQuery,
    topic: string,
    partition: string,
    size: number,
    queryStart: IQueryStart,
  ): Promise<IQueryResult>;
}

export interface IKafkaRPCClient {}
