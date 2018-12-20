import * as publicIp from 'public-ip';

export class IpFinder {

    public async getPublicIp(): Promise<string> {
        let returnValue: string;
        await publicIp.v4().then( (ip: any) => {
          returnValue = ip;
        });
        return returnValue;
    }
}
