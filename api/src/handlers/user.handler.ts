export const userPost = (req: any,res: any) =>{
	try {
		res.status(200).json({message: 'todo funcinando'})
	} catch (error) {
		res.status(400).json({message: error})
	}
}