import { TypedEmitter } from "tiny-typed-emitter"

export interface CloseModalEvent {
    /**
     * The result that is returned to the function that opened the modal
     */
    data?: unknown
}

interface ModalContextEvents {
    'close': (event: CloseModalEvent) => void
}

/**
 * A handle facilitating communication between the caller
 * and an open modal
 */
export class ModalContext {
    private resolve: (value: CloseModalEvent) => void
    private reject: (value: unknown) => void
    private _emitter: TypedEmitter<ModalContextEvents>

    constructor(
        resolve: (value: unknown) => void,
        reject: (value: unknown) => void,
    ) {
        this.resolve = resolve
        this.reject = reject
        this._emitter = new TypedEmitter<ModalContextEvents>()

        this.onClose((closeEvent: CloseModalEvent) => {
            resolve(closeEvent)
        })
    }

    /**
     *
     * @param callback
     * Action to perform when the close event triggers
     */
    onClose(callback: (event: CloseModalEvent) => void): void {
        this._emitter.addListener('close', callback)
    }

    /**
     * Close the modal, optionally passing a data property
     * @param closeEvent
     */
    close(data: unknown): void {
        this._emitter.emit('close', { data })
    }

    /**
     * Close the modal, optionally passing a data property
     * @param closeEvent
     */
    dismiss(): void {
        this._emitter.emit('close', { data: undefined })
    }
}

