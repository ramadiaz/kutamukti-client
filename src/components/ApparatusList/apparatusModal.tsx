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
                <div className="p-4 flex flex-col sm:flex-row items-start gap-8">
                  <div className="w-full sm:basis-1/3 hidden sm:block">
                    <Image
                      src={data.image_url}
                      alt={data.name}
                      height={300}
                      width={`100%`}
                      className="object-cover"
                    />
                  </div>
                  <div className="sm:basis-2/3">
                    <h2 className="uppercase text-2xl font-semibold">
                      {data.name}
                    </h2>
                    <p>{data.role}</p>
                    <div className="h-6 sm:h-16" />
                    <p className="text-emerald-700">
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
