class DataStoreService implements IDataStoreService {
    static serviceId = "dataStore";

    private data: any = null;

    put(data: any): void {
        this.data = data;
    }

    get(): any {
        return this.data;
    }

    remove(): void {
        this.data = null;
    }
}