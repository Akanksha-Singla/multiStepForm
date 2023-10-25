import { z } from 'zod';

// import { ICategory } from './categories.types';
// import { S3Link } from './media.type';

export const activityValidationSchema = z.object({
  id:z.number().optional(),
  title: z.string(),
  oneLiner: z.string().max(300, 'must contain atmost 300 letters'),
  city: z.string(),
  // duration: z.number().min(0, 'invalid duration').max(360, 'can not exceed 360 hours or 15 days').optional(),
  
  // cardType: z.union([
  //   z.literal('Booking'),
  //   z.literal('Free'),
  //   z.literal('Informational'),
  //   z.literal('Room Booking'),
  // ]).optional(),
//  options: z
//     .array(
//       z.object({
//         title: z.string(),
//         description: z.string().optional(),
//         price: z.number().min(0, 'invalid price'),
//         discount: z.number().min(0, 'invalid discount').max(100, 'invalid discount'),
//         finalPrice: z.number(),
//         isDefault: z.boolean(),
//       }),
//     )
//     .optional(),

  // tags: z.array(z.string()).max(6, 'must contain atmost 6 tags').optional(),

  // description: z.string().max(2000, 'must contain atmost 2000 letters').optional(),
  
  // price:z.number().optional(),

});

export type IAddUpdateActivity = z.infer<typeof activityValidationSchema>;

export interface IActivity
  extends Omit<IAddUpdateActivity, 'categoryId' | 'content' | 'options' | 'relatedActivities'> {
  _id: string;
//   categoryId: ICategory[];
//   content?: {
//     posterImage: S3Link[];
//     activityVideo: S3Link[];
//   };
  options: IActivityOptions[];
  relatedActivities: IActivity[];
}

export interface IActivityOptions {
  _id: string;
  title: string;
  description: string;
  price: number;
  discount: number;
  finalPrice: number;
  isDefault: boolean;
}

// export interface IActivityCard
//   extends Pick<
//     IActivity,
//     | '_id'
//     | 'title'
//     | 'isArchived'
//     | 'isActive'
//     | 'oneLiner'
//     | 'city'
//     | 'pricing'
//     | 'content'
//     | 'duration'
//     | 'categoryId'
//     | 'isTraveeyCard'
//   > {}

// export type IGetAllActivitiesApiResponse = {
//   data: {
//     activeTraveeyCards: IActivityCard[];
//     activities: IActivityCard[];
//   };
//   message: string;
// };
