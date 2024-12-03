import {
	DialogBackdrop,
	DialogCloseTrigger,
	DialogContent,
	DialogDescription,
	DialogPositioner,
	DialogRoot,
	DialogTitle,
	DialogTrigger,
} from '@ark-ui/react';
import { XIcon } from 'lucide-react';
import React from 'react';

type DialogProps = {
	trigger: React.ReactNode;
	content: React.ReactNode;
	isOpen: boolean;
	setIsOpen: (open: boolean) => void;
	title: string;
	description?: string;
	lazyMount?: boolean;
	unmountOnExit?: boolean;
	backdrop?: boolean;
};

export const Dialog = ({
	trigger,
	content,
	isOpen,
	setIsOpen,
	title,
	description,
	lazyMount = true,
	unmountOnExit = true,
	backdrop = true,
}: DialogProps) => {
	return (
		<DialogRoot
			open={isOpen}
			onOpenChange={(e) => setIsOpen(e.open)}
			lazyMount={lazyMount}
			unmountOnExit={unmountOnExit}
		>
			<DialogTrigger asChild>{trigger}</DialogTrigger>

			{backdrop ?? <DialogBackdrop />}

			<DialogPositioner>
				<div>
					<DialogContent asChild>
						<div>
							<DialogTitle>{title}</DialogTitle>
							{description && <DialogDescription>{description}</DialogDescription>}

							<DialogCloseTrigger asChild>
								<XIcon />
							</DialogCloseTrigger>
						</div>

						{content}
					</DialogContent>
				</div>
			</DialogPositioner>
		</DialogRoot>
	);
};
