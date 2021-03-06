import '../async-await';
import { AdvancedVideoViewBase } from './advanced-video-view.common';
export declare class AdvancedVideoView extends AdvancedVideoViewBase {
    thumbnails: any[];
    readonly duration: any;
    static requestPermissions(explanation?: string): Promise<any>;
    private durationInterval;
    static isAvailable(): any;
    createNativeView(): co.fitcom.fancycamera.FancyCamera;
    initNativeView(): void;
    onLoaded(): void;
    onUnloaded(): void;
    private setCameraPosition(position);
    private setQuality(quality);
    toggleCamera(): void;
    startRecording(cb: any): void;
    stopRecording(): void;
    startPreview(): void;
    stopPreview(): void;
    extractThumbnails(file: any): void;
}
