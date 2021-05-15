export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AvifOptions = {
  quality: Maybe<Scalars["Int"]>;
  lossless: Maybe<Scalars["Boolean"]>;
  speed: Maybe<Scalars["Int"]>;
};

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width: Maybe<Scalars["Int"]>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat: Maybe<ImageFormat>;
};

export type BooleanQueryOperatorInput = {
  eq: Maybe<Scalars["Boolean"]>;
  ne: Maybe<Scalars["Boolean"]>;
  in: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
  nin: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
};

export type DateQueryOperatorInput = {
  eq: Maybe<Scalars["Date"]>;
  ne: Maybe<Scalars["Date"]>;
  gt: Maybe<Scalars["Date"]>;
  gte: Maybe<Scalars["Date"]>;
  lt: Maybe<Scalars["Date"]>;
  lte: Maybe<Scalars["Date"]>;
  in: Maybe<Array<Maybe<Scalars["Date"]>>>;
  nin: Maybe<Array<Maybe<Scalars["Date"]>>>;
};

export type Directory = Node & {
  __typename?: "Directory";
  sourceInstanceName: Scalars["String"];
  absolutePath: Scalars["String"];
  relativePath: Scalars["String"];
  extension: Scalars["String"];
  size: Scalars["Int"];
  prettySize: Scalars["String"];
  modifiedTime: Scalars["Date"];
  accessTime: Scalars["Date"];
  changeTime: Scalars["Date"];
  birthTime: Scalars["Date"];
  root: Scalars["String"];
  dir: Scalars["String"];
  base: Scalars["String"];
  ext: Scalars["String"];
  name: Scalars["String"];
  relativeDirectory: Scalars["String"];
  dev: Scalars["Int"];
  mode: Scalars["Int"];
  nlink: Scalars["Int"];
  uid: Scalars["Int"];
  gid: Scalars["Int"];
  rdev: Scalars["Int"];
  ino: Scalars["Float"];
  atimeMs: Scalars["Float"];
  mtimeMs: Scalars["Float"];
  ctimeMs: Scalars["Float"];
  atime: Scalars["Date"];
  mtime: Scalars["Date"];
  ctime: Scalars["Date"];
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars["Date"]>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars["Float"]>;
  blksize: Maybe<Scalars["Int"]>;
  blocks: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DirectoryModifiedTimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type DirectoryAccessTimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type DirectoryChangeTimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type DirectoryBirthTimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type DirectoryAtimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type DirectoryMtimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type DirectoryCtimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type DirectoryConnection = {
  __typename?: "DirectoryConnection";
  totalCount: Scalars["Int"];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  sum: Maybe<Scalars["Float"]>;
  group: Array<DirectoryGroupConnection>;
};

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: "DirectoryEdge";
  next: Maybe<Directory>;
  node: Directory;
  previous: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  sourceInstanceName = "sourceInstanceName",
  absolutePath = "absolutePath",
  relativePath = "relativePath",
  extension = "extension",
  size = "size",
  prettySize = "prettySize",
  modifiedTime = "modifiedTime",
  accessTime = "accessTime",
  changeTime = "changeTime",
  birthTime = "birthTime",
  root = "root",
  dir = "dir",
  base = "base",
  ext = "ext",
  name = "name",
  relativeDirectory = "relativeDirectory",
  dev = "dev",
  mode = "mode",
  nlink = "nlink",
  uid = "uid",
  gid = "gid",
  rdev = "rdev",
  ino = "ino",
  atimeMs = "atimeMs",
  mtimeMs = "mtimeMs",
  ctimeMs = "ctimeMs",
  atime = "atime",
  mtime = "mtime",
  ctime = "ctime",
  birthtime = "birthtime",
  birthtimeMs = "birthtimeMs",
  blksize = "blksize",
  blocks = "blocks",
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
}

export type DirectoryFilterInput = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  __typename?: "DirectoryGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
};

export type DirectorySortInput = {
  fields: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars["String"];
  shadow: Scalars["String"];
  opacity: Maybe<Scalars["Int"]>;
};

export type File = Node & {
  __typename?: "File";
  sourceInstanceName: Scalars["String"];
  absolutePath: Scalars["String"];
  relativePath: Scalars["String"];
  extension: Scalars["String"];
  size: Scalars["Int"];
  prettySize: Scalars["String"];
  modifiedTime: Scalars["Date"];
  accessTime: Scalars["Date"];
  changeTime: Scalars["Date"];
  birthTime: Scalars["Date"];
  root: Scalars["String"];
  dir: Scalars["String"];
  base: Scalars["String"];
  ext: Scalars["String"];
  name: Scalars["String"];
  relativeDirectory: Scalars["String"];
  dev: Scalars["Int"];
  mode: Scalars["Int"];
  nlink: Scalars["Int"];
  uid: Scalars["Int"];
  gid: Scalars["Int"];
  rdev: Scalars["Int"];
  ino: Scalars["Float"];
  atimeMs: Scalars["Float"];
  mtimeMs: Scalars["Float"];
  ctimeMs: Scalars["Float"];
  atime: Scalars["Date"];
  mtime: Scalars["Date"];
  ctime: Scalars["Date"];
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars["Date"]>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars["Float"]>;
  blksize: Maybe<Scalars["Int"]>;
  blocks: Maybe<Scalars["Int"]>;
  /** Copy file to static directory and return public url to it */
  publicURL: Maybe<Scalars["String"]>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp: Maybe<ImageSharp>;
  /** Returns all children nodes filtered by type Mdx */
  childrenMdx: Maybe<Array<Maybe<Mdx>>>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  childMdx: Maybe<Mdx>;
  id: Scalars["ID"];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type FileModifiedTimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type FileAccessTimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type FileChangeTimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type FileBirthTimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type FileAtimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type FileMtimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type FileCtimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type FileConnection = {
  __typename?: "FileConnection";
  totalCount: Scalars["Int"];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  sum: Maybe<Scalars["Float"]>;
  group: Array<FileGroupConnection>;
};

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: "FileEdge";
  next: Maybe<File>;
  node: File;
  previous: Maybe<File>;
};

export enum FileFieldsEnum {
  sourceInstanceName = "sourceInstanceName",
  absolutePath = "absolutePath",
  relativePath = "relativePath",
  extension = "extension",
  size = "size",
  prettySize = "prettySize",
  modifiedTime = "modifiedTime",
  accessTime = "accessTime",
  changeTime = "changeTime",
  birthTime = "birthTime",
  root = "root",
  dir = "dir",
  base = "base",
  ext = "ext",
  name = "name",
  relativeDirectory = "relativeDirectory",
  dev = "dev",
  mode = "mode",
  nlink = "nlink",
  uid = "uid",
  gid = "gid",
  rdev = "rdev",
  ino = "ino",
  atimeMs = "atimeMs",
  mtimeMs = "mtimeMs",
  ctimeMs = "ctimeMs",
  atime = "atime",
  mtime = "mtime",
  ctime = "ctime",
  birthtime = "birthtime",
  birthtimeMs = "birthtimeMs",
  blksize = "blksize",
  blocks = "blocks",
  publicURL = "publicURL",
  childrenImageSharp = "childrenImageSharp",
  childrenImageSharp___fixed___base64 = "childrenImageSharp___fixed___base64",
  childrenImageSharp___fixed___tracedSVG = "childrenImageSharp___fixed___tracedSVG",
  childrenImageSharp___fixed___aspectRatio = "childrenImageSharp___fixed___aspectRatio",
  childrenImageSharp___fixed___width = "childrenImageSharp___fixed___width",
  childrenImageSharp___fixed___height = "childrenImageSharp___fixed___height",
  childrenImageSharp___fixed___src = "childrenImageSharp___fixed___src",
  childrenImageSharp___fixed___srcSet = "childrenImageSharp___fixed___srcSet",
  childrenImageSharp___fixed___srcWebp = "childrenImageSharp___fixed___srcWebp",
  childrenImageSharp___fixed___srcSetWebp = "childrenImageSharp___fixed___srcSetWebp",
  childrenImageSharp___fixed___originalName = "childrenImageSharp___fixed___originalName",
  childrenImageSharp___fluid___base64 = "childrenImageSharp___fluid___base64",
  childrenImageSharp___fluid___tracedSVG = "childrenImageSharp___fluid___tracedSVG",
  childrenImageSharp___fluid___aspectRatio = "childrenImageSharp___fluid___aspectRatio",
  childrenImageSharp___fluid___src = "childrenImageSharp___fluid___src",
  childrenImageSharp___fluid___srcSet = "childrenImageSharp___fluid___srcSet",
  childrenImageSharp___fluid___srcWebp = "childrenImageSharp___fluid___srcWebp",
  childrenImageSharp___fluid___srcSetWebp = "childrenImageSharp___fluid___srcSetWebp",
  childrenImageSharp___fluid___sizes = "childrenImageSharp___fluid___sizes",
  childrenImageSharp___fluid___originalImg = "childrenImageSharp___fluid___originalImg",
  childrenImageSharp___fluid___originalName = "childrenImageSharp___fluid___originalName",
  childrenImageSharp___fluid___presentationWidth = "childrenImageSharp___fluid___presentationWidth",
  childrenImageSharp___fluid___presentationHeight = "childrenImageSharp___fluid___presentationHeight",
  childrenImageSharp___gatsbyImageData = "childrenImageSharp___gatsbyImageData",
  childrenImageSharp___original___width = "childrenImageSharp___original___width",
  childrenImageSharp___original___height = "childrenImageSharp___original___height",
  childrenImageSharp___original___src = "childrenImageSharp___original___src",
  childrenImageSharp___resize___src = "childrenImageSharp___resize___src",
  childrenImageSharp___resize___tracedSVG = "childrenImageSharp___resize___tracedSVG",
  childrenImageSharp___resize___width = "childrenImageSharp___resize___width",
  childrenImageSharp___resize___height = "childrenImageSharp___resize___height",
  childrenImageSharp___resize___aspectRatio = "childrenImageSharp___resize___aspectRatio",
  childrenImageSharp___resize___originalName = "childrenImageSharp___resize___originalName",
  childrenImageSharp___id = "childrenImageSharp___id",
  childrenImageSharp___parent___id = "childrenImageSharp___parent___id",
  childrenImageSharp___parent___parent___id = "childrenImageSharp___parent___parent___id",
  childrenImageSharp___parent___parent___children = "childrenImageSharp___parent___parent___children",
  childrenImageSharp___parent___children = "childrenImageSharp___parent___children",
  childrenImageSharp___parent___children___id = "childrenImageSharp___parent___children___id",
  childrenImageSharp___parent___children___children = "childrenImageSharp___parent___children___children",
  childrenImageSharp___parent___internal___content = "childrenImageSharp___parent___internal___content",
  childrenImageSharp___parent___internal___contentDigest = "childrenImageSharp___parent___internal___contentDigest",
  childrenImageSharp___parent___internal___description = "childrenImageSharp___parent___internal___description",
  childrenImageSharp___parent___internal___fieldOwners = "childrenImageSharp___parent___internal___fieldOwners",
  childrenImageSharp___parent___internal___ignoreType = "childrenImageSharp___parent___internal___ignoreType",
  childrenImageSharp___parent___internal___mediaType = "childrenImageSharp___parent___internal___mediaType",
  childrenImageSharp___parent___internal___owner = "childrenImageSharp___parent___internal___owner",
  childrenImageSharp___parent___internal___type = "childrenImageSharp___parent___internal___type",
  childrenImageSharp___children = "childrenImageSharp___children",
  childrenImageSharp___children___id = "childrenImageSharp___children___id",
  childrenImageSharp___children___parent___id = "childrenImageSharp___children___parent___id",
  childrenImageSharp___children___parent___children = "childrenImageSharp___children___parent___children",
  childrenImageSharp___children___children = "childrenImageSharp___children___children",
  childrenImageSharp___children___children___id = "childrenImageSharp___children___children___id",
  childrenImageSharp___children___children___children = "childrenImageSharp___children___children___children",
  childrenImageSharp___children___internal___content = "childrenImageSharp___children___internal___content",
  childrenImageSharp___children___internal___contentDigest = "childrenImageSharp___children___internal___contentDigest",
  childrenImageSharp___children___internal___description = "childrenImageSharp___children___internal___description",
  childrenImageSharp___children___internal___fieldOwners = "childrenImageSharp___children___internal___fieldOwners",
  childrenImageSharp___children___internal___ignoreType = "childrenImageSharp___children___internal___ignoreType",
  childrenImageSharp___children___internal___mediaType = "childrenImageSharp___children___internal___mediaType",
  childrenImageSharp___children___internal___owner = "childrenImageSharp___children___internal___owner",
  childrenImageSharp___children___internal___type = "childrenImageSharp___children___internal___type",
  childrenImageSharp___internal___content = "childrenImageSharp___internal___content",
  childrenImageSharp___internal___contentDigest = "childrenImageSharp___internal___contentDigest",
  childrenImageSharp___internal___description = "childrenImageSharp___internal___description",
  childrenImageSharp___internal___fieldOwners = "childrenImageSharp___internal___fieldOwners",
  childrenImageSharp___internal___ignoreType = "childrenImageSharp___internal___ignoreType",
  childrenImageSharp___internal___mediaType = "childrenImageSharp___internal___mediaType",
  childrenImageSharp___internal___owner = "childrenImageSharp___internal___owner",
  childrenImageSharp___internal___type = "childrenImageSharp___internal___type",
  childImageSharp___fixed___base64 = "childImageSharp___fixed___base64",
  childImageSharp___fixed___tracedSVG = "childImageSharp___fixed___tracedSVG",
  childImageSharp___fixed___aspectRatio = "childImageSharp___fixed___aspectRatio",
  childImageSharp___fixed___width = "childImageSharp___fixed___width",
  childImageSharp___fixed___height = "childImageSharp___fixed___height",
  childImageSharp___fixed___src = "childImageSharp___fixed___src",
  childImageSharp___fixed___srcSet = "childImageSharp___fixed___srcSet",
  childImageSharp___fixed___srcWebp = "childImageSharp___fixed___srcWebp",
  childImageSharp___fixed___srcSetWebp = "childImageSharp___fixed___srcSetWebp",
  childImageSharp___fixed___originalName = "childImageSharp___fixed___originalName",
  childImageSharp___fluid___base64 = "childImageSharp___fluid___base64",
  childImageSharp___fluid___tracedSVG = "childImageSharp___fluid___tracedSVG",
  childImageSharp___fluid___aspectRatio = "childImageSharp___fluid___aspectRatio",
  childImageSharp___fluid___src = "childImageSharp___fluid___src",
  childImageSharp___fluid___srcSet = "childImageSharp___fluid___srcSet",
  childImageSharp___fluid___srcWebp = "childImageSharp___fluid___srcWebp",
  childImageSharp___fluid___srcSetWebp = "childImageSharp___fluid___srcSetWebp",
  childImageSharp___fluid___sizes = "childImageSharp___fluid___sizes",
  childImageSharp___fluid___originalImg = "childImageSharp___fluid___originalImg",
  childImageSharp___fluid___originalName = "childImageSharp___fluid___originalName",
  childImageSharp___fluid___presentationWidth = "childImageSharp___fluid___presentationWidth",
  childImageSharp___fluid___presentationHeight = "childImageSharp___fluid___presentationHeight",
  childImageSharp___gatsbyImageData = "childImageSharp___gatsbyImageData",
  childImageSharp___original___width = "childImageSharp___original___width",
  childImageSharp___original___height = "childImageSharp___original___height",
  childImageSharp___original___src = "childImageSharp___original___src",
  childImageSharp___resize___src = "childImageSharp___resize___src",
  childImageSharp___resize___tracedSVG = "childImageSharp___resize___tracedSVG",
  childImageSharp___resize___width = "childImageSharp___resize___width",
  childImageSharp___resize___height = "childImageSharp___resize___height",
  childImageSharp___resize___aspectRatio = "childImageSharp___resize___aspectRatio",
  childImageSharp___resize___originalName = "childImageSharp___resize___originalName",
  childImageSharp___id = "childImageSharp___id",
  childImageSharp___parent___id = "childImageSharp___parent___id",
  childImageSharp___parent___parent___id = "childImageSharp___parent___parent___id",
  childImageSharp___parent___parent___children = "childImageSharp___parent___parent___children",
  childImageSharp___parent___children = "childImageSharp___parent___children",
  childImageSharp___parent___children___id = "childImageSharp___parent___children___id",
  childImageSharp___parent___children___children = "childImageSharp___parent___children___children",
  childImageSharp___parent___internal___content = "childImageSharp___parent___internal___content",
  childImageSharp___parent___internal___contentDigest = "childImageSharp___parent___internal___contentDigest",
  childImageSharp___parent___internal___description = "childImageSharp___parent___internal___description",
  childImageSharp___parent___internal___fieldOwners = "childImageSharp___parent___internal___fieldOwners",
  childImageSharp___parent___internal___ignoreType = "childImageSharp___parent___internal___ignoreType",
  childImageSharp___parent___internal___mediaType = "childImageSharp___parent___internal___mediaType",
  childImageSharp___parent___internal___owner = "childImageSharp___parent___internal___owner",
  childImageSharp___parent___internal___type = "childImageSharp___parent___internal___type",
  childImageSharp___children = "childImageSharp___children",
  childImageSharp___children___id = "childImageSharp___children___id",
  childImageSharp___children___parent___id = "childImageSharp___children___parent___id",
  childImageSharp___children___parent___children = "childImageSharp___children___parent___children",
  childImageSharp___children___children = "childImageSharp___children___children",
  childImageSharp___children___children___id = "childImageSharp___children___children___id",
  childImageSharp___children___children___children = "childImageSharp___children___children___children",
  childImageSharp___children___internal___content = "childImageSharp___children___internal___content",
  childImageSharp___children___internal___contentDigest = "childImageSharp___children___internal___contentDigest",
  childImageSharp___children___internal___description = "childImageSharp___children___internal___description",
  childImageSharp___children___internal___fieldOwners = "childImageSharp___children___internal___fieldOwners",
  childImageSharp___children___internal___ignoreType = "childImageSharp___children___internal___ignoreType",
  childImageSharp___children___internal___mediaType = "childImageSharp___children___internal___mediaType",
  childImageSharp___children___internal___owner = "childImageSharp___children___internal___owner",
  childImageSharp___children___internal___type = "childImageSharp___children___internal___type",
  childImageSharp___internal___content = "childImageSharp___internal___content",
  childImageSharp___internal___contentDigest = "childImageSharp___internal___contentDigest",
  childImageSharp___internal___description = "childImageSharp___internal___description",
  childImageSharp___internal___fieldOwners = "childImageSharp___internal___fieldOwners",
  childImageSharp___internal___ignoreType = "childImageSharp___internal___ignoreType",
  childImageSharp___internal___mediaType = "childImageSharp___internal___mediaType",
  childImageSharp___internal___owner = "childImageSharp___internal___owner",
  childImageSharp___internal___type = "childImageSharp___internal___type",
  childrenMdx = "childrenMdx",
  childrenMdx___rawBody = "childrenMdx___rawBody",
  childrenMdx___fileAbsolutePath = "childrenMdx___fileAbsolutePath",
  childrenMdx___frontmatter___title = "childrenMdx___frontmatter___title",
  childrenMdx___frontmatter___date = "childrenMdx___frontmatter___date",
  childrenMdx___frontmatter___emoji = "childrenMdx___frontmatter___emoji",
  childrenMdx___slug = "childrenMdx___slug",
  childrenMdx___body = "childrenMdx___body",
  childrenMdx___excerpt = "childrenMdx___excerpt",
  childrenMdx___headings = "childrenMdx___headings",
  childrenMdx___headings___value = "childrenMdx___headings___value",
  childrenMdx___headings___depth = "childrenMdx___headings___depth",
  childrenMdx___html = "childrenMdx___html",
  childrenMdx___mdxAST = "childrenMdx___mdxAST",
  childrenMdx___tableOfContents = "childrenMdx___tableOfContents",
  childrenMdx___timeToRead = "childrenMdx___timeToRead",
  childrenMdx___wordCount___paragraphs = "childrenMdx___wordCount___paragraphs",
  childrenMdx___wordCount___sentences = "childrenMdx___wordCount___sentences",
  childrenMdx___wordCount___words = "childrenMdx___wordCount___words",
  childrenMdx___fields___slug = "childrenMdx___fields___slug",
  childrenMdx___id = "childrenMdx___id",
  childrenMdx___parent___id = "childrenMdx___parent___id",
  childrenMdx___parent___parent___id = "childrenMdx___parent___parent___id",
  childrenMdx___parent___parent___children = "childrenMdx___parent___parent___children",
  childrenMdx___parent___children = "childrenMdx___parent___children",
  childrenMdx___parent___children___id = "childrenMdx___parent___children___id",
  childrenMdx___parent___children___children = "childrenMdx___parent___children___children",
  childrenMdx___parent___internal___content = "childrenMdx___parent___internal___content",
  childrenMdx___parent___internal___contentDigest = "childrenMdx___parent___internal___contentDigest",
  childrenMdx___parent___internal___description = "childrenMdx___parent___internal___description",
  childrenMdx___parent___internal___fieldOwners = "childrenMdx___parent___internal___fieldOwners",
  childrenMdx___parent___internal___ignoreType = "childrenMdx___parent___internal___ignoreType",
  childrenMdx___parent___internal___mediaType = "childrenMdx___parent___internal___mediaType",
  childrenMdx___parent___internal___owner = "childrenMdx___parent___internal___owner",
  childrenMdx___parent___internal___type = "childrenMdx___parent___internal___type",
  childrenMdx___children = "childrenMdx___children",
  childrenMdx___children___id = "childrenMdx___children___id",
  childrenMdx___children___parent___id = "childrenMdx___children___parent___id",
  childrenMdx___children___parent___children = "childrenMdx___children___parent___children",
  childrenMdx___children___children = "childrenMdx___children___children",
  childrenMdx___children___children___id = "childrenMdx___children___children___id",
  childrenMdx___children___children___children = "childrenMdx___children___children___children",
  childrenMdx___children___internal___content = "childrenMdx___children___internal___content",
  childrenMdx___children___internal___contentDigest = "childrenMdx___children___internal___contentDigest",
  childrenMdx___children___internal___description = "childrenMdx___children___internal___description",
  childrenMdx___children___internal___fieldOwners = "childrenMdx___children___internal___fieldOwners",
  childrenMdx___children___internal___ignoreType = "childrenMdx___children___internal___ignoreType",
  childrenMdx___children___internal___mediaType = "childrenMdx___children___internal___mediaType",
  childrenMdx___children___internal___owner = "childrenMdx___children___internal___owner",
  childrenMdx___children___internal___type = "childrenMdx___children___internal___type",
  childrenMdx___internal___content = "childrenMdx___internal___content",
  childrenMdx___internal___contentDigest = "childrenMdx___internal___contentDigest",
  childrenMdx___internal___description = "childrenMdx___internal___description",
  childrenMdx___internal___fieldOwners = "childrenMdx___internal___fieldOwners",
  childrenMdx___internal___ignoreType = "childrenMdx___internal___ignoreType",
  childrenMdx___internal___mediaType = "childrenMdx___internal___mediaType",
  childrenMdx___internal___owner = "childrenMdx___internal___owner",
  childrenMdx___internal___type = "childrenMdx___internal___type",
  childMdx___rawBody = "childMdx___rawBody",
  childMdx___fileAbsolutePath = "childMdx___fileAbsolutePath",
  childMdx___frontmatter___title = "childMdx___frontmatter___title",
  childMdx___frontmatter___date = "childMdx___frontmatter___date",
  childMdx___frontmatter___emoji = "childMdx___frontmatter___emoji",
  childMdx___slug = "childMdx___slug",
  childMdx___body = "childMdx___body",
  childMdx___excerpt = "childMdx___excerpt",
  childMdx___headings = "childMdx___headings",
  childMdx___headings___value = "childMdx___headings___value",
  childMdx___headings___depth = "childMdx___headings___depth",
  childMdx___html = "childMdx___html",
  childMdx___mdxAST = "childMdx___mdxAST",
  childMdx___tableOfContents = "childMdx___tableOfContents",
  childMdx___timeToRead = "childMdx___timeToRead",
  childMdx___wordCount___paragraphs = "childMdx___wordCount___paragraphs",
  childMdx___wordCount___sentences = "childMdx___wordCount___sentences",
  childMdx___wordCount___words = "childMdx___wordCount___words",
  childMdx___fields___slug = "childMdx___fields___slug",
  childMdx___id = "childMdx___id",
  childMdx___parent___id = "childMdx___parent___id",
  childMdx___parent___parent___id = "childMdx___parent___parent___id",
  childMdx___parent___parent___children = "childMdx___parent___parent___children",
  childMdx___parent___children = "childMdx___parent___children",
  childMdx___parent___children___id = "childMdx___parent___children___id",
  childMdx___parent___children___children = "childMdx___parent___children___children",
  childMdx___parent___internal___content = "childMdx___parent___internal___content",
  childMdx___parent___internal___contentDigest = "childMdx___parent___internal___contentDigest",
  childMdx___parent___internal___description = "childMdx___parent___internal___description",
  childMdx___parent___internal___fieldOwners = "childMdx___parent___internal___fieldOwners",
  childMdx___parent___internal___ignoreType = "childMdx___parent___internal___ignoreType",
  childMdx___parent___internal___mediaType = "childMdx___parent___internal___mediaType",
  childMdx___parent___internal___owner = "childMdx___parent___internal___owner",
  childMdx___parent___internal___type = "childMdx___parent___internal___type",
  childMdx___children = "childMdx___children",
  childMdx___children___id = "childMdx___children___id",
  childMdx___children___parent___id = "childMdx___children___parent___id",
  childMdx___children___parent___children = "childMdx___children___parent___children",
  childMdx___children___children = "childMdx___children___children",
  childMdx___children___children___id = "childMdx___children___children___id",
  childMdx___children___children___children = "childMdx___children___children___children",
  childMdx___children___internal___content = "childMdx___children___internal___content",
  childMdx___children___internal___contentDigest = "childMdx___children___internal___contentDigest",
  childMdx___children___internal___description = "childMdx___children___internal___description",
  childMdx___children___internal___fieldOwners = "childMdx___children___internal___fieldOwners",
  childMdx___children___internal___ignoreType = "childMdx___children___internal___ignoreType",
  childMdx___children___internal___mediaType = "childMdx___children___internal___mediaType",
  childMdx___children___internal___owner = "childMdx___children___internal___owner",
  childMdx___children___internal___type = "childMdx___children___internal___type",
  childMdx___internal___content = "childMdx___internal___content",
  childMdx___internal___contentDigest = "childMdx___internal___contentDigest",
  childMdx___internal___description = "childMdx___internal___description",
  childMdx___internal___fieldOwners = "childMdx___internal___fieldOwners",
  childMdx___internal___ignoreType = "childMdx___internal___ignoreType",
  childMdx___internal___mediaType = "childMdx___internal___mediaType",
  childMdx___internal___owner = "childMdx___internal___owner",
  childMdx___internal___type = "childMdx___internal___type",
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
}

export type FileFilterInput = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  childrenMdx: Maybe<MdxFilterListInput>;
  childMdx: Maybe<MdxFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  __typename?: "FileGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
};

export type FileSortInput = {
  fields: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq: Maybe<Scalars["Float"]>;
  ne: Maybe<Scalars["Float"]>;
  gt: Maybe<Scalars["Float"]>;
  gte: Maybe<Scalars["Float"]>;
  lt: Maybe<Scalars["Float"]>;
  lte: Maybe<Scalars["Float"]>;
  in: Maybe<Array<Maybe<Scalars["Float"]>>>;
  nin: Maybe<Array<Maybe<Scalars["Float"]>>>;
};

export enum HeadingsMdx {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
}

export enum ImageCropFocus {
  CENTER = "CENTER",
  NORTH = "NORTH",
  NORTHEAST = "NORTHEAST",
  EAST = "EAST",
  SOUTHEAST = "SOUTHEAST",
  SOUTH = "SOUTH",
  SOUTHWEST = "SOUTHWEST",
  WEST = "WEST",
  NORTHWEST = "NORTHWEST",
  ENTROPY = "ENTROPY",
  ATTENTION = "ATTENTION",
}

export enum ImageFit {
  COVER = "COVER",
  CONTAIN = "CONTAIN",
  FILL = "FILL",
  INSIDE = "INSIDE",
  OUTSIDE = "OUTSIDE",
}

export enum ImageFormat {
  NO_CHANGE = "NO_CHANGE",
  AUTO = "AUTO",
  JPG = "JPG",
  PNG = "PNG",
  WEBP = "WEBP",
  AVIF = "AVIF",
}

export enum ImageLayout {
  FIXED = "FIXED",
  FULL_WIDTH = "FULL_WIDTH",
  CONSTRAINED = "CONSTRAINED",
}

export enum ImagePlaceholder {
  DOMINANT_COLOR = "DOMINANT_COLOR",
  TRACED_SVG = "TRACED_SVG",
  BLURRED = "BLURRED",
  NONE = "NONE",
}

export type ImageSharp = Node & {
  __typename?: "ImageSharp";
  fixed: Maybe<ImageSharpFixed>;
  fluid: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars["JSON"];
  original: Maybe<ImageSharpOriginal>;
  resize: Maybe<ImageSharpResize>;
  id: Scalars["ID"];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ImageSharpFixedArgs = {
  width: Maybe<Scalars["Int"]>;
  height: Maybe<Scalars["Int"]>;
  base64Width: Maybe<Scalars["Int"]>;
  jpegProgressive?: Maybe<Scalars["Boolean"]>;
  pngCompressionSpeed?: Maybe<Scalars["Int"]>;
  grayscale?: Maybe<Scalars["Boolean"]>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars["Int"]>;
  jpegQuality: Maybe<Scalars["Int"]>;
  pngQuality: Maybe<Scalars["Int"]>;
  webpQuality: Maybe<Scalars["Int"]>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars["String"]>;
  rotate?: Maybe<Scalars["Int"]>;
  trim?: Maybe<Scalars["Float"]>;
};

export type ImageSharpFluidArgs = {
  maxWidth: Maybe<Scalars["Int"]>;
  maxHeight: Maybe<Scalars["Int"]>;
  base64Width: Maybe<Scalars["Int"]>;
  grayscale?: Maybe<Scalars["Boolean"]>;
  jpegProgressive?: Maybe<Scalars["Boolean"]>;
  pngCompressionSpeed?: Maybe<Scalars["Int"]>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars["Int"]>;
  jpegQuality: Maybe<Scalars["Int"]>;
  pngQuality: Maybe<Scalars["Int"]>;
  webpQuality: Maybe<Scalars["Int"]>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars["String"]>;
  rotate?: Maybe<Scalars["Int"]>;
  trim?: Maybe<Scalars["Float"]>;
  sizes?: Maybe<Scalars["String"]>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>;
};

export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width: Maybe<Scalars["Int"]>;
  height: Maybe<Scalars["Int"]>;
  aspectRatio: Maybe<Scalars["Float"]>;
  placeholder: Maybe<ImagePlaceholder>;
  blurredOptions: Maybe<BlurredOptions>;
  tracedSVGOptions: Maybe<Potrace>;
  formats: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities: Maybe<Array<Maybe<Scalars["Float"]>>>;
  breakpoints: Maybe<Array<Maybe<Scalars["Int"]>>>;
  sizes: Maybe<Scalars["String"]>;
  quality: Maybe<Scalars["Int"]>;
  jpgOptions: Maybe<JpgOptions>;
  pngOptions: Maybe<PngOptions>;
  webpOptions: Maybe<WebPOptions>;
  avifOptions: Maybe<AvifOptions>;
  transformOptions: Maybe<TransformOptions>;
  backgroundColor: Maybe<Scalars["String"]>;
};

export type ImageSharpResizeArgs = {
  width: Maybe<Scalars["Int"]>;
  height: Maybe<Scalars["Int"]>;
  quality: Maybe<Scalars["Int"]>;
  jpegQuality: Maybe<Scalars["Int"]>;
  pngQuality: Maybe<Scalars["Int"]>;
  webpQuality: Maybe<Scalars["Int"]>;
  jpegProgressive?: Maybe<Scalars["Boolean"]>;
  pngCompressionLevel?: Maybe<Scalars["Int"]>;
  pngCompressionSpeed?: Maybe<Scalars["Int"]>;
  grayscale?: Maybe<Scalars["Boolean"]>;
  duotone: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars["Boolean"]>;
  traceSVG: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars["String"]>;
  rotate?: Maybe<Scalars["Int"]>;
  trim?: Maybe<Scalars["Float"]>;
};

export type ImageSharpConnection = {
  __typename?: "ImageSharpConnection";
  totalCount: Scalars["Int"];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  sum: Maybe<Scalars["Float"]>;
  group: Array<ImageSharpGroupConnection>;
};

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionGroupArgs = {
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: "ImageSharpEdge";
  next: Maybe<ImageSharp>;
  node: ImageSharp;
  previous: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  fixed___base64 = "fixed___base64",
  fixed___tracedSVG = "fixed___tracedSVG",
  fixed___aspectRatio = "fixed___aspectRatio",
  fixed___width = "fixed___width",
  fixed___height = "fixed___height",
  fixed___src = "fixed___src",
  fixed___srcSet = "fixed___srcSet",
  fixed___srcWebp = "fixed___srcWebp",
  fixed___srcSetWebp = "fixed___srcSetWebp",
  fixed___originalName = "fixed___originalName",
  fluid___base64 = "fluid___base64",
  fluid___tracedSVG = "fluid___tracedSVG",
  fluid___aspectRatio = "fluid___aspectRatio",
  fluid___src = "fluid___src",
  fluid___srcSet = "fluid___srcSet",
  fluid___srcWebp = "fluid___srcWebp",
  fluid___srcSetWebp = "fluid___srcSetWebp",
  fluid___sizes = "fluid___sizes",
  fluid___originalImg = "fluid___originalImg",
  fluid___originalName = "fluid___originalName",
  fluid___presentationWidth = "fluid___presentationWidth",
  fluid___presentationHeight = "fluid___presentationHeight",
  gatsbyImageData = "gatsbyImageData",
  original___width = "original___width",
  original___height = "original___height",
  original___src = "original___src",
  resize___src = "resize___src",
  resize___tracedSVG = "resize___tracedSVG",
  resize___width = "resize___width",
  resize___height = "resize___height",
  resize___aspectRatio = "resize___aspectRatio",
  resize___originalName = "resize___originalName",
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
}

export type ImageSharpFilterInput = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: Maybe<JsonQueryOperatorInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: "ImageSharpFixed";
  base64: Maybe<Scalars["String"]>;
  tracedSVG: Maybe<Scalars["String"]>;
  aspectRatio: Maybe<Scalars["Float"]>;
  width: Scalars["Float"];
  height: Scalars["Float"];
  src: Scalars["String"];
  srcSet: Scalars["String"];
  srcWebp: Maybe<Scalars["String"]>;
  srcSetWebp: Maybe<Scalars["String"]>;
  originalName: Maybe<Scalars["String"]>;
};

export type ImageSharpFixedFilterInput = {
  base64: Maybe<StringQueryOperatorInput>;
  tracedSVG: Maybe<StringQueryOperatorInput>;
  aspectRatio: Maybe<FloatQueryOperatorInput>;
  width: Maybe<FloatQueryOperatorInput>;
  height: Maybe<FloatQueryOperatorInput>;
  src: Maybe<StringQueryOperatorInput>;
  srcSet: Maybe<StringQueryOperatorInput>;
  srcWebp: Maybe<StringQueryOperatorInput>;
  srcSetWebp: Maybe<StringQueryOperatorInput>;
  originalName: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  __typename?: "ImageSharpFluid";
  base64: Maybe<Scalars["String"]>;
  tracedSVG: Maybe<Scalars["String"]>;
  aspectRatio: Scalars["Float"];
  src: Scalars["String"];
  srcSet: Scalars["String"];
  srcWebp: Maybe<Scalars["String"]>;
  srcSetWebp: Maybe<Scalars["String"]>;
  sizes: Scalars["String"];
  originalImg: Maybe<Scalars["String"]>;
  originalName: Maybe<Scalars["String"]>;
  presentationWidth: Scalars["Int"];
  presentationHeight: Scalars["Int"];
};

export type ImageSharpFluidFilterInput = {
  base64: Maybe<StringQueryOperatorInput>;
  tracedSVG: Maybe<StringQueryOperatorInput>;
  aspectRatio: Maybe<FloatQueryOperatorInput>;
  src: Maybe<StringQueryOperatorInput>;
  srcSet: Maybe<StringQueryOperatorInput>;
  srcWebp: Maybe<StringQueryOperatorInput>;
  srcSetWebp: Maybe<StringQueryOperatorInput>;
  sizes: Maybe<StringQueryOperatorInput>;
  originalImg: Maybe<StringQueryOperatorInput>;
  originalName: Maybe<StringQueryOperatorInput>;
  presentationWidth: Maybe<IntQueryOperatorInput>;
  presentationHeight: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  __typename?: "ImageSharpGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
};

export type ImageSharpOriginal = {
  __typename?: "ImageSharpOriginal";
  width: Maybe<Scalars["Float"]>;
  height: Maybe<Scalars["Float"]>;
  src: Maybe<Scalars["String"]>;
};

export type ImageSharpOriginalFilterInput = {
  width: Maybe<FloatQueryOperatorInput>;
  height: Maybe<FloatQueryOperatorInput>;
  src: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: "ImageSharpResize";
  src: Maybe<Scalars["String"]>;
  tracedSVG: Maybe<Scalars["String"]>;
  width: Maybe<Scalars["Int"]>;
  height: Maybe<Scalars["Int"]>;
  aspectRatio: Maybe<Scalars["Float"]>;
  originalName: Maybe<Scalars["String"]>;
};

export type ImageSharpResizeFilterInput = {
  src: Maybe<StringQueryOperatorInput>;
  tracedSVG: Maybe<StringQueryOperatorInput>;
  width: Maybe<IntQueryOperatorInput>;
  height: Maybe<IntQueryOperatorInput>;
  aspectRatio: Maybe<FloatQueryOperatorInput>;
  originalName: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type IntQueryOperatorInput = {
  eq: Maybe<Scalars["Int"]>;
  ne: Maybe<Scalars["Int"]>;
  gt: Maybe<Scalars["Int"]>;
  gte: Maybe<Scalars["Int"]>;
  lt: Maybe<Scalars["Int"]>;
  lte: Maybe<Scalars["Int"]>;
  in: Maybe<Array<Maybe<Scalars["Int"]>>>;
  nin: Maybe<Array<Maybe<Scalars["Int"]>>>;
};

export type Internal = {
  __typename?: "Internal";
  content: Maybe<Scalars["String"]>;
  contentDigest: Scalars["String"];
  description: Maybe<Scalars["String"]>;
  fieldOwners: Maybe<Array<Maybe<Scalars["String"]>>>;
  ignoreType: Maybe<Scalars["Boolean"]>;
  mediaType: Maybe<Scalars["String"]>;
  owner: Scalars["String"];
  type: Scalars["String"];
};

export type InternalFilterInput = {
  content: Maybe<StringQueryOperatorInput>;
  contentDigest: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  fieldOwners: Maybe<StringQueryOperatorInput>;
  ignoreType: Maybe<BooleanQueryOperatorInput>;
  mediaType: Maybe<StringQueryOperatorInput>;
  owner: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
};

export type JpgOptions = {
  quality: Maybe<Scalars["Int"]>;
  progressive: Maybe<Scalars["Boolean"]>;
};

export type JsonQueryOperatorInput = {
  eq: Maybe<Scalars["JSON"]>;
  ne: Maybe<Scalars["JSON"]>;
  in: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  nin: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  regex: Maybe<Scalars["JSON"]>;
  glob: Maybe<Scalars["JSON"]>;
};

export type Mdx = Node & {
  __typename?: "Mdx";
  rawBody: Scalars["String"];
  fileAbsolutePath: Scalars["String"];
  frontmatter: Maybe<MdxFrontmatter>;
  slug: Maybe<Scalars["String"]>;
  body: Scalars["String"];
  excerpt: Scalars["String"];
  headings: Maybe<Array<Maybe<MdxHeadingMdx>>>;
  html: Maybe<Scalars["String"]>;
  mdxAST: Maybe<Scalars["JSON"]>;
  tableOfContents: Maybe<Scalars["JSON"]>;
  timeToRead: Maybe<Scalars["Int"]>;
  wordCount: Maybe<MdxWordCount>;
  fields: Maybe<MdxFields>;
  id: Scalars["ID"];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type MdxExcerptArgs = {
  pruneLength?: Maybe<Scalars["Int"]>;
  truncate?: Maybe<Scalars["Boolean"]>;
};

export type MdxHeadingsArgs = {
  depth: Maybe<HeadingsMdx>;
};

export type MdxTableOfContentsArgs = {
  maxDepth: Maybe<Scalars["Int"]>;
};

export type MdxConnection = {
  __typename?: "MdxConnection";
  totalCount: Scalars["Int"];
  edges: Array<MdxEdge>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  sum: Maybe<Scalars["Float"]>;
  group: Array<MdxGroupConnection>;
};

export type MdxConnectionDistinctArgs = {
  field: MdxFieldsEnum;
};

export type MdxConnectionMaxArgs = {
  field: MdxFieldsEnum;
};

export type MdxConnectionMinArgs = {
  field: MdxFieldsEnum;
};

export type MdxConnectionSumArgs = {
  field: MdxFieldsEnum;
};

export type MdxConnectionGroupArgs = {
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
  field: MdxFieldsEnum;
};

export type MdxEdge = {
  __typename?: "MdxEdge";
  next: Maybe<Mdx>;
  node: Mdx;
  previous: Maybe<Mdx>;
};

export type MdxFields = {
  __typename?: "MdxFields";
  slug: Maybe<Scalars["String"]>;
};

export enum MdxFieldsEnum {
  rawBody = "rawBody",
  fileAbsolutePath = "fileAbsolutePath",
  frontmatter___title = "frontmatter___title",
  frontmatter___date = "frontmatter___date",
  frontmatter___emoji = "frontmatter___emoji",
  slug = "slug",
  body = "body",
  excerpt = "excerpt",
  headings = "headings",
  headings___value = "headings___value",
  headings___depth = "headings___depth",
  html = "html",
  mdxAST = "mdxAST",
  tableOfContents = "tableOfContents",
  timeToRead = "timeToRead",
  wordCount___paragraphs = "wordCount___paragraphs",
  wordCount___sentences = "wordCount___sentences",
  wordCount___words = "wordCount___words",
  fields___slug = "fields___slug",
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
}

export type MdxFieldsFilterInput = {
  slug: Maybe<StringQueryOperatorInput>;
};

export type MdxFilterInput = {
  rawBody: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  frontmatter: Maybe<MdxFrontmatterFilterInput>;
  slug: Maybe<StringQueryOperatorInput>;
  body: Maybe<StringQueryOperatorInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  headings: Maybe<MdxHeadingMdxFilterListInput>;
  html: Maybe<StringQueryOperatorInput>;
  mdxAST: Maybe<JsonQueryOperatorInput>;
  tableOfContents: Maybe<JsonQueryOperatorInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  wordCount: Maybe<MdxWordCountFilterInput>;
  fields: Maybe<MdxFieldsFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type MdxFilterListInput = {
  elemMatch: Maybe<MdxFilterInput>;
};

export type MdxFrontmatter = {
  __typename?: "MdxFrontmatter";
  title: Scalars["String"];
  date: Maybe<Scalars["Date"]>;
  emoji: Maybe<Scalars["String"]>;
};

export type MdxFrontmatterDateArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type MdxFrontmatterFilterInput = {
  title: Maybe<StringQueryOperatorInput>;
  date: Maybe<DateQueryOperatorInput>;
  emoji: Maybe<StringQueryOperatorInput>;
};

export type MdxGroupConnection = {
  __typename?: "MdxGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<MdxEdge>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
};

export type MdxHeadingMdx = {
  __typename?: "MdxHeadingMdx";
  value: Maybe<Scalars["String"]>;
  depth: Maybe<Scalars["Int"]>;
};

export type MdxHeadingMdxFilterInput = {
  value: Maybe<StringQueryOperatorInput>;
  depth: Maybe<IntQueryOperatorInput>;
};

export type MdxHeadingMdxFilterListInput = {
  elemMatch: Maybe<MdxHeadingMdxFilterInput>;
};

export type MdxSortInput = {
  fields: Maybe<Array<Maybe<MdxFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MdxWordCount = {
  __typename?: "MdxWordCount";
  paragraphs: Maybe<Scalars["Int"]>;
  sentences: Maybe<Scalars["Int"]>;
  words: Maybe<Scalars["Int"]>;
};

export type MdxWordCountFilterInput = {
  paragraphs: Maybe<IntQueryOperatorInput>;
  sentences: Maybe<IntQueryOperatorInput>;
  words: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  id: Scalars["ID"];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch: Maybe<NodeFilterInput>;
};

export type PngOptions = {
  quality: Maybe<Scalars["Int"]>;
  compressionSpeed: Maybe<Scalars["Int"]>;
};

export type PageInfo = {
  __typename?: "PageInfo";
  currentPage: Scalars["Int"];
  hasPreviousPage: Scalars["Boolean"];
  hasNextPage: Scalars["Boolean"];
  itemCount: Scalars["Int"];
  pageCount: Scalars["Int"];
  perPage: Maybe<Scalars["Int"]>;
  totalCount: Scalars["Int"];
};

export type Potrace = {
  turnPolicy: Maybe<PotraceTurnPolicy>;
  turdSize: Maybe<Scalars["Float"]>;
  alphaMax: Maybe<Scalars["Float"]>;
  optCurve: Maybe<Scalars["Boolean"]>;
  optTolerance: Maybe<Scalars["Float"]>;
  threshold: Maybe<Scalars["Int"]>;
  blackOnWhite: Maybe<Scalars["Boolean"]>;
  color: Maybe<Scalars["String"]>;
  background: Maybe<Scalars["String"]>;
};

export enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = "TURNPOLICY_BLACK",
  TURNPOLICY_WHITE = "TURNPOLICY_WHITE",
  TURNPOLICY_LEFT = "TURNPOLICY_LEFT",
  TURNPOLICY_RIGHT = "TURNPOLICY_RIGHT",
  TURNPOLICY_MINORITY = "TURNPOLICY_MINORITY",
  TURNPOLICY_MAJORITY = "TURNPOLICY_MAJORITY",
}

export type Query = {
  __typename?: "Query";
  file: Maybe<File>;
  allFile: FileConnection;
  directory: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  imageSharp: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  mdx: Maybe<Mdx>;
  allMdx: MdxConnection;
  siteBuildMetadata: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};

export type QueryFileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  childrenMdx: Maybe<MdxFilterListInput>;
  childMdx: Maybe<MdxFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type QueryAllFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
};

export type QueryDirectoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type QueryAllDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
};

export type QuerySiteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type QueryAllSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
};

export type QuerySiteFunctionArgs = {
  apiRoute: Maybe<StringQueryOperatorInput>;
  originalFilePath: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type QueryAllSiteFunctionArgs = {
  filter: Maybe<SiteFunctionFilterInput>;
  sort: Maybe<SiteFunctionSortInput>;
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
};

export type QuerySitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  context: Maybe<SitePageContextFilterInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
  componentPath: Maybe<StringQueryOperatorInput>;
};

export type QueryAllSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
};

export type QueryImageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: Maybe<JsonQueryOperatorInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type QueryAllImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>;
  sort: Maybe<ImageSharpSortInput>;
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
};

export type QueryMdxArgs = {
  rawBody: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  frontmatter: Maybe<MdxFrontmatterFilterInput>;
  slug: Maybe<StringQueryOperatorInput>;
  body: Maybe<StringQueryOperatorInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  headings: Maybe<MdxHeadingMdxFilterListInput>;
  html: Maybe<StringQueryOperatorInput>;
  mdxAST: Maybe<JsonQueryOperatorInput>;
  tableOfContents: Maybe<JsonQueryOperatorInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  wordCount: Maybe<MdxWordCountFilterInput>;
  fields: Maybe<MdxFieldsFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type QueryAllMdxArgs = {
  filter: Maybe<MdxFilterInput>;
  sort: Maybe<MdxSortInput>;
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
};

export type QuerySiteBuildMetadataArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  buildTime: Maybe<DateQueryOperatorInput>;
};

export type QueryAllSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
};

export type QuerySitePluginArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};

export type QueryAllSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
};

export type Site = Node & {
  __typename?: "Site";
  buildTime: Maybe<Scalars["Date"]>;
  siteMetadata: Maybe<SiteSiteMetadata>;
  port: Maybe<Scalars["Int"]>;
  host: Maybe<Scalars["String"]>;
  polyfill: Maybe<Scalars["Boolean"]>;
  pathPrefix: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildTimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type SiteBuildMetadata = Node & {
  __typename?: "SiteBuildMetadata";
  id: Scalars["ID"];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime: Maybe<Scalars["Date"]>;
};

export type SiteBuildMetadataBuildTimeArgs = {
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  difference: Maybe<Scalars["String"]>;
  locale: Maybe<Scalars["String"]>;
};

export type SiteBuildMetadataConnection = {
  __typename?: "SiteBuildMetadataConnection";
  totalCount: Scalars["Int"];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  sum: Maybe<Scalars["Float"]>;
  group: Array<SiteBuildMetadataGroupConnection>;
};

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionGroupArgs = {
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: "SiteBuildMetadataEdge";
  next: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
  buildTime = "buildTime",
}

export type SiteBuildMetadataFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  buildTime: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: "SiteBuildMetadataGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
};

export type SiteBuildMetadataSortInput = {
  fields: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: "SiteConnection";
  totalCount: Scalars["Int"];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  sum: Maybe<Scalars["Float"]>;
  group: Array<SiteGroupConnection>;
};

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: "SiteEdge";
  next: Maybe<Site>;
  node: Site;
  previous: Maybe<Site>;
};

export enum SiteFieldsEnum {
  buildTime = "buildTime",
  siteMetadata___title = "siteMetadata___title",
  siteMetadata___description = "siteMetadata___description",
  port = "port",
  host = "host",
  polyfill = "polyfill",
  pathPrefix = "pathPrefix",
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
}

export type SiteFilterInput = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type SiteFunction = Node & {
  __typename?: "SiteFunction";
  apiRoute: Scalars["String"];
  originalFilePath: Scalars["String"];
  relativeCompiledFilePath: Scalars["String"];
  absoluteCompiledFilePath: Scalars["String"];
  matchPath: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteFunctionConnection = {
  __typename?: "SiteFunctionConnection";
  totalCount: Scalars["Int"];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  sum: Maybe<Scalars["Float"]>;
  group: Array<SiteFunctionGroupConnection>;
};

export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionGroupArgs = {
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  __typename?: "SiteFunctionEdge";
  next: Maybe<SiteFunction>;
  node: SiteFunction;
  previous: Maybe<SiteFunction>;
};

export enum SiteFunctionFieldsEnum {
  apiRoute = "apiRoute",
  originalFilePath = "originalFilePath",
  relativeCompiledFilePath = "relativeCompiledFilePath",
  absoluteCompiledFilePath = "absoluteCompiledFilePath",
  matchPath = "matchPath",
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
}

export type SiteFunctionFilterInput = {
  apiRoute: Maybe<StringQueryOperatorInput>;
  originalFilePath: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};

export type SiteFunctionGroupConnection = {
  __typename?: "SiteFunctionGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
};

export type SiteFunctionSortInput = {
  fields: Maybe<Array<Maybe<SiteFunctionFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteGroupConnection = {
  __typename?: "SiteGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
};

export type SitePage = Node & {
  __typename?: "SitePage";
  path: Scalars["String"];
  component: Scalars["String"];
  internalComponentName: Scalars["String"];
  componentChunkName: Scalars["String"];
  matchPath: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages: Maybe<Scalars["Boolean"]>;
  context: Maybe<SitePageContext>;
  pluginCreator: Maybe<SitePlugin>;
  pluginCreatorId: Maybe<Scalars["String"]>;
  componentPath: Maybe<Scalars["String"]>;
};

export type SitePageConnection = {
  __typename?: "SitePageConnection";
  totalCount: Scalars["Int"];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  sum: Maybe<Scalars["Float"]>;
  group: Array<SitePageGroupConnection>;
};

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  __typename?: "SitePageContext";
  id: Maybe<Scalars["String"]>;
};

export type SitePageContextFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  __typename?: "SitePageEdge";
  next: Maybe<SitePage>;
  node: SitePage;
  previous: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  path = "path",
  component = "component",
  internalComponentName = "internalComponentName",
  componentChunkName = "componentChunkName",
  matchPath = "matchPath",
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
  isCreatedByStatefulCreatePages = "isCreatedByStatefulCreatePages",
  context___id = "context___id",
  pluginCreator___id = "pluginCreator___id",
  pluginCreator___parent___id = "pluginCreator___parent___id",
  pluginCreator___parent___parent___id = "pluginCreator___parent___parent___id",
  pluginCreator___parent___parent___children = "pluginCreator___parent___parent___children",
  pluginCreator___parent___children = "pluginCreator___parent___children",
  pluginCreator___parent___children___id = "pluginCreator___parent___children___id",
  pluginCreator___parent___children___children = "pluginCreator___parent___children___children",
  pluginCreator___parent___internal___content = "pluginCreator___parent___internal___content",
  pluginCreator___parent___internal___contentDigest = "pluginCreator___parent___internal___contentDigest",
  pluginCreator___parent___internal___description = "pluginCreator___parent___internal___description",
  pluginCreator___parent___internal___fieldOwners = "pluginCreator___parent___internal___fieldOwners",
  pluginCreator___parent___internal___ignoreType = "pluginCreator___parent___internal___ignoreType",
  pluginCreator___parent___internal___mediaType = "pluginCreator___parent___internal___mediaType",
  pluginCreator___parent___internal___owner = "pluginCreator___parent___internal___owner",
  pluginCreator___parent___internal___type = "pluginCreator___parent___internal___type",
  pluginCreator___children = "pluginCreator___children",
  pluginCreator___children___id = "pluginCreator___children___id",
  pluginCreator___children___parent___id = "pluginCreator___children___parent___id",
  pluginCreator___children___parent___children = "pluginCreator___children___parent___children",
  pluginCreator___children___children = "pluginCreator___children___children",
  pluginCreator___children___children___id = "pluginCreator___children___children___id",
  pluginCreator___children___children___children = "pluginCreator___children___children___children",
  pluginCreator___children___internal___content = "pluginCreator___children___internal___content",
  pluginCreator___children___internal___contentDigest = "pluginCreator___children___internal___contentDigest",
  pluginCreator___children___internal___description = "pluginCreator___children___internal___description",
  pluginCreator___children___internal___fieldOwners = "pluginCreator___children___internal___fieldOwners",
  pluginCreator___children___internal___ignoreType = "pluginCreator___children___internal___ignoreType",
  pluginCreator___children___internal___mediaType = "pluginCreator___children___internal___mediaType",
  pluginCreator___children___internal___owner = "pluginCreator___children___internal___owner",
  pluginCreator___children___internal___type = "pluginCreator___children___internal___type",
  pluginCreator___internal___content = "pluginCreator___internal___content",
  pluginCreator___internal___contentDigest = "pluginCreator___internal___contentDigest",
  pluginCreator___internal___description = "pluginCreator___internal___description",
  pluginCreator___internal___fieldOwners = "pluginCreator___internal___fieldOwners",
  pluginCreator___internal___ignoreType = "pluginCreator___internal___ignoreType",
  pluginCreator___internal___mediaType = "pluginCreator___internal___mediaType",
  pluginCreator___internal___owner = "pluginCreator___internal___owner",
  pluginCreator___internal___type = "pluginCreator___internal___type",
  pluginCreator___resolve = "pluginCreator___resolve",
  pluginCreator___name = "pluginCreator___name",
  pluginCreator___version = "pluginCreator___version",
  pluginCreator___pluginOptions___displayName = "pluginCreator___pluginOptions___displayName",
  pluginCreator___pluginOptions___fileName = "pluginCreator___pluginOptions___fileName",
  pluginCreator___pluginOptions___minify = "pluginCreator___pluginOptions___minify",
  pluginCreator___pluginOptions___namespace = "pluginCreator___pluginOptions___namespace",
  pluginCreator___pluginOptions___transpileTemplateLiterals = "pluginCreator___pluginOptions___transpileTemplateLiterals",
  pluginCreator___pluginOptions___pure = "pluginCreator___pluginOptions___pure",
  pluginCreator___pluginOptions___output = "pluginCreator___pluginOptions___output",
  pluginCreator___pluginOptions___createLinkInHead = "pluginCreator___pluginOptions___createLinkInHead",
  pluginCreator___pluginOptions___entryLimit = "pluginCreator___pluginOptions___entryLimit",
  pluginCreator___pluginOptions___query = "pluginCreator___pluginOptions___query",
  pluginCreator___pluginOptions___icon = "pluginCreator___pluginOptions___icon",
  pluginCreator___pluginOptions___legacy = "pluginCreator___pluginOptions___legacy",
  pluginCreator___pluginOptions___theme_color_in_head = "pluginCreator___pluginOptions___theme_color_in_head",
  pluginCreator___pluginOptions___cache_busting_mode = "pluginCreator___pluginOptions___cache_busting_mode",
  pluginCreator___pluginOptions___crossOrigin = "pluginCreator___pluginOptions___crossOrigin",
  pluginCreator___pluginOptions___include_favicon = "pluginCreator___pluginOptions___include_favicon",
  pluginCreator___pluginOptions___cacheDigest = "pluginCreator___pluginOptions___cacheDigest",
  pluginCreator___pluginOptions___base64Width = "pluginCreator___pluginOptions___base64Width",
  pluginCreator___pluginOptions___stripMetadata = "pluginCreator___pluginOptions___stripMetadata",
  pluginCreator___pluginOptions___defaultQuality = "pluginCreator___pluginOptions___defaultQuality",
  pluginCreator___pluginOptions___failOnError = "pluginCreator___pluginOptions___failOnError",
  pluginCreator___pluginOptions___name = "pluginCreator___pluginOptions___name",
  pluginCreator___pluginOptions___path = "pluginCreator___pluginOptions___path",
  pluginCreator___pluginOptions___extensions = "pluginCreator___pluginOptions___extensions",
  pluginCreator___pluginOptions___lessBabel = "pluginCreator___pluginOptions___lessBabel",
  pluginCreator___pluginOptions___mediaTypes = "pluginCreator___pluginOptions___mediaTypes",
  pluginCreator___pluginOptions___root = "pluginCreator___pluginOptions___root",
  pluginCreator___pluginOptions___pathCheck = "pluginCreator___pluginOptions___pathCheck",
  pluginCreator___pluginOptions___allExtensions = "pluginCreator___pluginOptions___allExtensions",
  pluginCreator___pluginOptions___isTSX = "pluginCreator___pluginOptions___isTSX",
  pluginCreator___pluginOptions___jsxPragma = "pluginCreator___pluginOptions___jsxPragma",
  pluginCreator___nodeAPIs = "pluginCreator___nodeAPIs",
  pluginCreator___browserAPIs = "pluginCreator___browserAPIs",
  pluginCreator___ssrAPIs = "pluginCreator___ssrAPIs",
  pluginCreator___pluginFilepath = "pluginCreator___pluginFilepath",
  pluginCreator___packageJson___name = "pluginCreator___packageJson___name",
  pluginCreator___packageJson___description = "pluginCreator___packageJson___description",
  pluginCreator___packageJson___version = "pluginCreator___packageJson___version",
  pluginCreator___packageJson___main = "pluginCreator___packageJson___main",
  pluginCreator___packageJson___author = "pluginCreator___packageJson___author",
  pluginCreator___packageJson___license = "pluginCreator___packageJson___license",
  pluginCreator___packageJson___dependencies = "pluginCreator___packageJson___dependencies",
  pluginCreator___packageJson___dependencies___name = "pluginCreator___packageJson___dependencies___name",
  pluginCreator___packageJson___dependencies___version = "pluginCreator___packageJson___dependencies___version",
  pluginCreator___packageJson___devDependencies = "pluginCreator___packageJson___devDependencies",
  pluginCreator___packageJson___devDependencies___name = "pluginCreator___packageJson___devDependencies___name",
  pluginCreator___packageJson___devDependencies___version = "pluginCreator___packageJson___devDependencies___version",
  pluginCreator___packageJson___peerDependencies = "pluginCreator___packageJson___peerDependencies",
  pluginCreator___packageJson___peerDependencies___name = "pluginCreator___packageJson___peerDependencies___name",
  pluginCreator___packageJson___peerDependencies___version = "pluginCreator___packageJson___peerDependencies___version",
  pluginCreator___packageJson___keywords = "pluginCreator___packageJson___keywords",
  pluginCreatorId = "pluginCreatorId",
  componentPath = "componentPath",
}

export type SitePageFilterInput = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  context: Maybe<SitePageContextFilterInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
  componentPath: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  __typename?: "SitePageGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
};

export type SitePageSortInput = {
  fields: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: "SitePlugin";
  id: Scalars["ID"];
  parent: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve: Maybe<Scalars["String"]>;
  name: Maybe<Scalars["String"]>;
  version: Maybe<Scalars["String"]>;
  pluginOptions: Maybe<SitePluginPluginOptions>;
  nodeAPIs: Maybe<Array<Maybe<Scalars["String"]>>>;
  browserAPIs: Maybe<Array<Maybe<Scalars["String"]>>>;
  ssrAPIs: Maybe<Array<Maybe<Scalars["String"]>>>;
  pluginFilepath: Maybe<Scalars["String"]>;
  packageJson: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  __typename?: "SitePluginConnection";
  totalCount: Scalars["Int"];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  sum: Maybe<Scalars["Float"]>;
  group: Array<SitePluginGroupConnection>;
};

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
  skip: Maybe<Scalars["Int"]>;
  limit: Maybe<Scalars["Int"]>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: "SitePluginEdge";
  next: Maybe<SitePlugin>;
  node: SitePlugin;
  previous: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
  resolve = "resolve",
  name = "name",
  version = "version",
  pluginOptions___displayName = "pluginOptions___displayName",
  pluginOptions___fileName = "pluginOptions___fileName",
  pluginOptions___minify = "pluginOptions___minify",
  pluginOptions___namespace = "pluginOptions___namespace",
  pluginOptions___transpileTemplateLiterals = "pluginOptions___transpileTemplateLiterals",
  pluginOptions___pure = "pluginOptions___pure",
  pluginOptions___output = "pluginOptions___output",
  pluginOptions___createLinkInHead = "pluginOptions___createLinkInHead",
  pluginOptions___entryLimit = "pluginOptions___entryLimit",
  pluginOptions___query = "pluginOptions___query",
  pluginOptions___icon = "pluginOptions___icon",
  pluginOptions___legacy = "pluginOptions___legacy",
  pluginOptions___theme_color_in_head = "pluginOptions___theme_color_in_head",
  pluginOptions___cache_busting_mode = "pluginOptions___cache_busting_mode",
  pluginOptions___crossOrigin = "pluginOptions___crossOrigin",
  pluginOptions___include_favicon = "pluginOptions___include_favicon",
  pluginOptions___cacheDigest = "pluginOptions___cacheDigest",
  pluginOptions___base64Width = "pluginOptions___base64Width",
  pluginOptions___stripMetadata = "pluginOptions___stripMetadata",
  pluginOptions___defaultQuality = "pluginOptions___defaultQuality",
  pluginOptions___failOnError = "pluginOptions___failOnError",
  pluginOptions___name = "pluginOptions___name",
  pluginOptions___path = "pluginOptions___path",
  pluginOptions___extensions = "pluginOptions___extensions",
  pluginOptions___lessBabel = "pluginOptions___lessBabel",
  pluginOptions___mediaTypes = "pluginOptions___mediaTypes",
  pluginOptions___root = "pluginOptions___root",
  pluginOptions___pathCheck = "pluginOptions___pathCheck",
  pluginOptions___allExtensions = "pluginOptions___allExtensions",
  pluginOptions___isTSX = "pluginOptions___isTSX",
  pluginOptions___jsxPragma = "pluginOptions___jsxPragma",
  nodeAPIs = "nodeAPIs",
  browserAPIs = "browserAPIs",
  ssrAPIs = "ssrAPIs",
  pluginFilepath = "pluginFilepath",
  packageJson___name = "packageJson___name",
  packageJson___description = "packageJson___description",
  packageJson___version = "packageJson___version",
  packageJson___main = "packageJson___main",
  packageJson___author = "packageJson___author",
  packageJson___license = "packageJson___license",
  packageJson___dependencies = "packageJson___dependencies",
  packageJson___dependencies___name = "packageJson___dependencies___name",
  packageJson___dependencies___version = "packageJson___dependencies___version",
  packageJson___devDependencies = "packageJson___devDependencies",
  packageJson___devDependencies___name = "packageJson___devDependencies___name",
  packageJson___devDependencies___version = "packageJson___devDependencies___version",
  packageJson___peerDependencies = "packageJson___peerDependencies",
  packageJson___peerDependencies___name = "packageJson___peerDependencies___name",
  packageJson___peerDependencies___version = "packageJson___peerDependencies___version",
  packageJson___keywords = "packageJson___keywords",
}

export type SitePluginFilterInput = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  __typename?: "SitePluginGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJson = {
  __typename?: "SitePluginPackageJson";
  name: Maybe<Scalars["String"]>;
  description: Maybe<Scalars["String"]>;
  version: Maybe<Scalars["String"]>;
  main: Maybe<Scalars["String"]>;
  author: Maybe<Scalars["String"]>;
  license: Maybe<Scalars["String"]>;
  dependencies: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: "SitePluginPackageJsonDependencies";
  name: Maybe<Scalars["String"]>;
  version: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: "SitePluginPackageJsonDevDependencies";
  name: Maybe<Scalars["String"]>;
  version: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  main: Maybe<StringQueryOperatorInput>;
  author: Maybe<StringQueryOperatorInput>;
  license: Maybe<StringQueryOperatorInput>;
  dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: "SitePluginPackageJsonPeerDependencies";
  name: Maybe<Scalars["String"]>;
  version: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  __typename?: "SitePluginPluginOptions";
  displayName: Maybe<Scalars["Boolean"]>;
  fileName: Maybe<Scalars["Boolean"]>;
  minify: Maybe<Scalars["Boolean"]>;
  namespace: Maybe<Scalars["String"]>;
  transpileTemplateLiterals: Maybe<Scalars["Boolean"]>;
  pure: Maybe<Scalars["Boolean"]>;
  output: Maybe<Scalars["String"]>;
  createLinkInHead: Maybe<Scalars["Boolean"]>;
  entryLimit: Maybe<Scalars["Int"]>;
  query: Maybe<Scalars["String"]>;
  icon: Maybe<Scalars["String"]>;
  legacy: Maybe<Scalars["Boolean"]>;
  theme_color_in_head: Maybe<Scalars["Boolean"]>;
  cache_busting_mode: Maybe<Scalars["String"]>;
  crossOrigin: Maybe<Scalars["String"]>;
  include_favicon: Maybe<Scalars["Boolean"]>;
  cacheDigest: Maybe<Scalars["String"]>;
  base64Width: Maybe<Scalars["Int"]>;
  stripMetadata: Maybe<Scalars["Boolean"]>;
  defaultQuality: Maybe<Scalars["Int"]>;
  failOnError: Maybe<Scalars["Boolean"]>;
  name: Maybe<Scalars["String"]>;
  path: Maybe<Scalars["String"]>;
  extensions: Maybe<Array<Maybe<Scalars["String"]>>>;
  lessBabel: Maybe<Scalars["Boolean"]>;
  mediaTypes: Maybe<Array<Maybe<Scalars["String"]>>>;
  root: Maybe<Scalars["String"]>;
  pathCheck: Maybe<Scalars["Boolean"]>;
  allExtensions: Maybe<Scalars["Boolean"]>;
  isTSX: Maybe<Scalars["Boolean"]>;
  jsxPragma: Maybe<Scalars["String"]>;
};

export type SitePluginPluginOptionsFilterInput = {
  displayName: Maybe<BooleanQueryOperatorInput>;
  fileName: Maybe<BooleanQueryOperatorInput>;
  minify: Maybe<BooleanQueryOperatorInput>;
  namespace: Maybe<StringQueryOperatorInput>;
  transpileTemplateLiterals: Maybe<BooleanQueryOperatorInput>;
  pure: Maybe<BooleanQueryOperatorInput>;
  output: Maybe<StringQueryOperatorInput>;
  createLinkInHead: Maybe<BooleanQueryOperatorInput>;
  entryLimit: Maybe<IntQueryOperatorInput>;
  query: Maybe<StringQueryOperatorInput>;
  icon: Maybe<StringQueryOperatorInput>;
  legacy: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head: Maybe<BooleanQueryOperatorInput>;
  cache_busting_mode: Maybe<StringQueryOperatorInput>;
  crossOrigin: Maybe<StringQueryOperatorInput>;
  include_favicon: Maybe<BooleanQueryOperatorInput>;
  cacheDigest: Maybe<StringQueryOperatorInput>;
  base64Width: Maybe<IntQueryOperatorInput>;
  stripMetadata: Maybe<BooleanQueryOperatorInput>;
  defaultQuality: Maybe<IntQueryOperatorInput>;
  failOnError: Maybe<BooleanQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  path: Maybe<StringQueryOperatorInput>;
  extensions: Maybe<StringQueryOperatorInput>;
  lessBabel: Maybe<BooleanQueryOperatorInput>;
  mediaTypes: Maybe<StringQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  pathCheck: Maybe<BooleanQueryOperatorInput>;
  allExtensions: Maybe<BooleanQueryOperatorInput>;
  isTSX: Maybe<BooleanQueryOperatorInput>;
  jsxPragma: Maybe<StringQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: "SiteSiteMetadata";
  title: Maybe<Scalars["String"]>;
  description: Maybe<Scalars["String"]>;
};

export type SiteSiteMetadataFilterInput = {
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  ASC = "ASC",
  DESC = "DESC",
}

export type StringQueryOperatorInput = {
  eq: Maybe<Scalars["String"]>;
  ne: Maybe<Scalars["String"]>;
  in: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex: Maybe<Scalars["String"]>;
  glob: Maybe<Scalars["String"]>;
};

export type TransformOptions = {
  grayscale: Maybe<Scalars["Boolean"]>;
  duotone: Maybe<DuotoneGradient>;
  rotate: Maybe<Scalars["Int"]>;
  trim: Maybe<Scalars["Float"]>;
  cropFocus: Maybe<ImageCropFocus>;
  fit: Maybe<ImageFit>;
};

export type WebPOptions = {
  quality: Maybe<Scalars["Int"]>;
};

export type SiteMetadataQueryVariables = Exact<{ [key: string]: never }>;

export type SiteMetadataQuery = { __typename?: "Query" } & {
  site: Maybe<
    { __typename?: "Site" } & {
      siteMetadata: Maybe<
        { __typename?: "SiteSiteMetadata" } & Pick<
          SiteSiteMetadata,
          "title" | "description"
        >
      >;
    }
  >;
};

export type PostByIdQueryVariables = Exact<{
  id: Maybe<Scalars["String"]>;
}>;

export type PostByIdQuery = { __typename?: "Query" } & {
  mdx: Maybe<
    { __typename?: "Mdx" } & Pick<Mdx, "id" | "body"> & {
        frontmatter: Maybe<
          { __typename?: "MdxFrontmatter" } & Pick<MdxFrontmatter, "title"> & {
              formattedDate: MdxFrontmatter["date"];
              rawDate: MdxFrontmatter["date"];
            }
        >;
      }
  >;
};

export type PostsIndexQueryVariables = Exact<{ [key: string]: never }>;

export type PostsIndexQuery = { __typename?: "Query" } & {
  posts: { __typename?: "MdxConnection" } & {
    nodes: Array<
      { __typename?: "Mdx" } & Pick<Mdx, "id" | "slug" | "excerpt"> & {
          frontmatter: Maybe<
            { __typename?: "MdxFrontmatter" } & Pick<
              MdxFrontmatter,
              "title" | "emoji"
            > & {
                formattedDate: MdxFrontmatter["date"];
                rawDate: MdxFrontmatter["date"];
              }
          >;
        }
    >;
  };
};

export type IndexQueryVariables = Exact<{ [key: string]: never }>;

export type IndexQuery = { __typename?: "Query" } & {
  site: Maybe<
    { __typename?: "Site" } & {
      siteMetadata: Maybe<
        { __typename?: "SiteSiteMetadata" } & Pick<SiteSiteMetadata, "title">
      >;
    }
  >;
};
