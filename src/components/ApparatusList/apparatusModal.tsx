"use client";

import { ApparatusType } from "@/types/apparatus";
import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ScrollShadow,
} from "@heroui/react";
import { UseDisclosureReturn } from "@heroui/use-disclosure";

export default function ApparatusModal({
  disclosure,
  data,
}: {
  disclosure: UseDisclosureReturn;
  data: ApparatusType;
}) {
  const { isOpen, onOpenChange } = disclosure;

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div className="p-8 flex flex-row items-start gap-8">
                  <Image
                    src={data.image_url}
                    alt={data.name}
                    height={300}
                    width={225}
                    className="object-cover basis-1/3"
                  />
                  <div className="basis-2/3">
                    <h2 className="uppercase text-2xl font-semibold">
                      {data.name}
                    </h2>
                    <p>{data.role}</p>
                    <div className="h-8" />
                    <p className="text-emerald-700 pb-4">
                      Masa Kerja: {data.periode}
                    </p>
                    <ScrollShadow className="max-h-96 pr-4">
                      <p className="">{data.desc}</p>
                    </ScrollShadow>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
