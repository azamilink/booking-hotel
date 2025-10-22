import CreateForm from '@/components/admin/room/CreateForm';
import { getAmenites } from '@/lib/data';

const CreateRoom = async () => {
	const amenities = await getAmenites();
	if (!amenities) return null;

	return (
		<div>
			<h1 className='text-3xl font-bold text-gray-800 mb-4'>Create New Room</h1>
			<CreateForm amenities={amenities} />
		</div>
	);
};

export default CreateRoom;
