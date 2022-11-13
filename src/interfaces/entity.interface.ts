import * as I from '.';

export interface Activity {
  id?: number;
  activeEnergyBurnedInKcal?: number;
  activeEnergyBurnedGoalInKcal?: number;
  exerciseTimeInMinutes?: number;
  exerciseTimeGoalInMinutes?: number;
  standHours?: number;
  standHoursGoal?: number;
  date?: Date;
  userId?: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  user?: User;
}

export class Bridge {
  id: number;
  name: string;
  bridgePositionX: number;
  bridgePositionY: number;
  bridgePositionZ: number;
  bridgeRotationX: number;
  bridgeRotationY: number;
  bridgeRotationZ: number;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  bridgeInfo: BridgeInfo;
  user: User;
}

export class BridgeInfo {
  id: number;
  bridgeId: number;
  fromLandId: number;
  toLandId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  bridge: Bridge;
  fromLand: Land;
  toLand: Land;
}

export class Land {
  id: number;
  unityLandId: number;
  landPositionX: number;
  landPositionY: number;
  landPositionZ: number;
  landScaleX: number;
  landScaleY: number;
  landScaleZ: number;
  landEulerAngleX: number;
  landEulerAngleY: number;
  landEulerAngleZ: number;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  fromBridgeInfo: BridgeInfo;
  toBridgeInfo: BridgeInfo;
  landDecorations: LandDecoration[];
  trees: Tree[];
  user: User;
}

export class LandDecoration {
  id: number;
  path: string;
  localPositionX: number;
  localPositionY: number;
  localPositionZ: number;
  localScaleX: number;
  localScaleY: number;
  localScaleZ: number;
  localEulerAngleX: number;
  localEulerAngleY: number;
  localEulerAngleZ: number;
  landId: number;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  land: Land;
  user: User;
}

export class Room {
  id: number;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  user: User;
  roomMembers: RoomMember[];
}

export class RoomMember {
  id: number;
  userId: number;
  roomId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  room: Room;
  user: User;
}

export class Sleep {
  id: number;
  startDate: Date;
  endDate: Date;
  type: I.SleepType;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  user: User;
}

export class Tree {
  id: number;
  treeName: string;
  seedNumber: number;
  seedType: string;
  landId: number;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  land: Land;
  user: User;
  treeGrowths: TreeGrowth[];
}

export class TreeGrowth {
  id: number;
  treeDay: number;
  treeId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  treePipeline: TreePipeline;
  tree: Tree;
}

export class TreePipeline {
  id: number;
  scale: number;
  branch1: number;
  branch2: number;
  branch3: number;
  branch4: number;
  trunkLength: number;
  sproutNum: number;
  rottenRate: number;
  gravity: number;
  rootNum: number;
  barkTexture: string;
  sproutIndex: number;
  treeGrowthId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  treeGrowth: TreeGrowth;
}

export class AttachFile {
  id: number;
  filename: string;
  originalName: string;
  path: string;
  mimeType: string;
  size: number;
  type: I.AttachFileType;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  user: User;
}

export class User {
  id: number;
  profileImg: string;
  bannerImg: string;
  type: I.UserType;
  nickname: string;
  avatar: string;
  badgeCount: number;
  productCount: number;
  hp: string;
  password: string;
  currentLandId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  // deviceToken: DeviceToken;
  bridges: Bridge[];
  lands: Land[];
  attachFiles: AttachFile[];
  landDecorations: LandDecoration[];
  activities: Activity[];
  sleeps: Sleep[];
  trees: Tree[];
  // cart: Cart;
  // wishlist: Wishlist;
  room: Room;
  roomMembers: RoomMember[];
  orders: Order[];
  products: Product[];
  // reviews: Review[];
}

export class Order {
  id: number;
  amount: number;
  payment: number;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  orderDetails: OrderDetail[];
  user: User;
}

export class OrderDetail {
  id: number;
  orderId: number;
  productId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  order: Order;
  product: Product;
}

export class Product {
  id: number;
  name: string;
  price: number;
  discount: number;
  stock: number;
  detail: string;
  hit: number;
  sell: number;
  category: I.ProductCategory;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  orderDetails: OrderDetail[];
  productImages: ProductImage[];
  // reviews: Review[];
  // cartItems: CartItem[];
  // wishlistItems: WishlistItem[];
  user: User;
}

export class ProductImage {
  id: number;
  filename: string;
  originalName: string;
  path: string;
  mimeType: string;
  size: number;
  productId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  product: Product;
}

export class Heart {
  id: number;
  valueInCountPerMinute: number;
  date: Date;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  user: User;
}

export class Oxygen {
  id: number;
  valueInRatio: number;
  date: Date;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  user: User;
}

export class Respiratory {
  id: number;
  valueInCountPerMinute: number;
  date: Date;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  user: User;
}
