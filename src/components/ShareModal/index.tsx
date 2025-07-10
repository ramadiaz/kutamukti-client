import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, UseDisclosureProps } from '@heroui/react'
import { FacebookLogoIcon, WhatsappLogoIcon, XLogoIcon } from '@phosphor-icons/react';
import Link from 'next/link';
import React from 'react'

const ShareModal = ({ disclosure, url }: { disclosure: UseDisclosureProps; url: string }) => {
    const pageUrl = encodeURIComponent(url);
    const text = encodeURIComponent("Check this out!");

    return (
        <Modal isOpen={disclosure.isOpen} onOpenChange={disclosure.onChange} onClose={disclosure.onClose}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader>
                            Bagikan berita ini!
                        </ModalHeader>
                        <ModalBody>
                            <div className='flex flex-row gap-2 items-center justify-center'>
                                <Link
                                    href={`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`}
                                    target="_blank"
                                    className='rounded-lg p-2 bg-blue-700 text-white'
                                >
                                    <FacebookLogoIcon size={40} />
                                </Link>
                                <Link
                                    href={`https://twitter.com/intent/tweet?url=${pageUrl}&text=${text}`}
                                    target="_blank"
                                    className='rounded-lg p-2 bg-black text-white'
                                >
                                    <XLogoIcon size={40} />
                                </Link>
                                <Link
                                    href={`https://wa.me/?text=${pageUrl}`}
                                    target="_blank"
                                    className='rounded-lg p-2 bg-green-600 text-white'
                                >
                                    <WhatsappLogoIcon size={40} />
                                </Link>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button onPress={onClose} color='primary'>
                                Close
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}

export default ShareModal