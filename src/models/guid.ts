export class Guid {

    /**
     * Creates a new Guid.
     * 
     * @static
     * @returns {string} 
     * @memberof Guid
     */
    public static newGuid(): string {
        return Guid.s4() + Guid.s4() + '-' + Guid.s4() + '-' + Guid.s4() + '-' +
            Guid.s4() + '-' + Guid.s4() + Guid.s4() + Guid.s4();
    }

    private static s4(): string {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

}