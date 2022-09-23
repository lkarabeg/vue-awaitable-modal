import { ModalContext } from "@/vue-awaitable-modal/modalContext"
import { TypedEmitter } from "tiny-typed-emitter"
import { Component } from "vue"

export type ModalProps = { [key: string]: unknown }

export interface ShowModalEvent {
    component: Component
    props?: ModalProps
    modalContext: ModalContext
}

interface ModalServiceEvents {
    'open': (event: ShowModalEvent) => void
}

export class ModalService {
    private _emitter = new TypedEmitter<ModalServiceEvents>()

    public onShowModal(callback: (event: ShowModalEvent) => void) {
        this._emitter.addListener('open', callback)
    }

    public showModal(component: Component, props?: ModalProps) {
        return new Promise((resolve, reject) => {
            const modalContext = new ModalContext(resolve, reject)
            this._emitter.emit('open', {
                component,
                props,
                modalContext,
            })
        })
    }
}

export const modalServiceInstance = new ModalService()
