import IVersionableDocument from '../../versionable/IVersionableDocument';

export default interface ICategoryModel extends IVersionableDocument {
  id: string;
  name: string;
  parentId: string;
  level: number;
}
