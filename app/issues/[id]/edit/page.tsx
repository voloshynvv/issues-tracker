import { getIssue } from '@/services/issues';

import { IssueForm } from '../../_components';

interface EditIssuePageProps {
	params: {
		id: string;
	};
}

const EditIssuePage = async ({ params: { id } }: EditIssuePageProps) => {
	const issue = await getIssue(id);

	return <IssueForm issue={issue} />;
};

export default EditIssuePage;