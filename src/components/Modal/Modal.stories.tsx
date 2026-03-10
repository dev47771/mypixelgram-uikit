import { Meta, StoryObj } from '@storybook/react-vite'
import { Modal, ModalBody, ModalClose, ModalTitle } from '../Modal'
import { ComponentPropsWithRef, useState } from 'react'
import { Typography } from '../Typography'
import { CrossIcon } from '@/icons'

const meta = {
   argTypes: {},
   component: Modal,
   tags: ['autodocs'],
   title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

const ModalWrapper = ({
   showTitle,
   ...args
}: { showTitle?: boolean } & ComponentPropsWithRef<typeof Modal>) => {
   const [show, setShow] = useState(false)

   return (
      <>
         <button onClick={() => setShow(true)}>Open modal</button>

         <Modal onOpenChange={setShow} open={show} {...args}>
            {showTitle && (
               <>
                  <ModalTitle className={'flex items-center justify-between'}>
                     <Typography variant={'h1'}>Modal Title</Typography>{' '}
                     <ModalClose asChild>
                        <CrossIcon />
                     </ModalClose>
                  </ModalTitle>

                  <hr className={'text-dark-100 h-[1px]'} />
               </>
            )}

            <ModalBody className="flex max-w-[378px] flex-col gap-4 px-6 py-3">
               <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quidem.
               </Typography>

               <ModalClose
                  className={'bg-accent-300 cursor-pointer self-end rounded-sm px-4 py-1.5'}
               >
                  ok
               </ModalClose>
            </ModalBody>
         </Modal>
      </>
   )
}

export const Default: Story = {
   render: args => <ModalWrapper {...args} showTitle={false} />,
}

export const WithTitle: Story = {
   render: args => <ModalWrapper {...args} showTitle={true} />,
}
