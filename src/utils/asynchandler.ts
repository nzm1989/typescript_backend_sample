// export function asyncMiddleware(req: any, res: any, next: any) {
//     Promise.resolve(asyncMiddleware(req, res, next))
//       .catch(next);
//   };

export const asyncHandler = (action: {
	 (req: any, res: any, next: any): Promise<void>; (req: any, res: any): {
		  catch: (err: any) => void;
		};
	}) => {
	return (req: any, res: any, next: any) => {
		return action(req, res).catch(next);
	};
};
