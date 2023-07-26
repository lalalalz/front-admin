import httpClient from "@/api/httpClient";

class Farm {

  async getFarms() {
    try {
      const response = (await httpClient.get("http://localhost:8080/admin/farms")).data;
      return this.getTableSource(response.data);
    }
    catch(error) {
      console.log(error);
    }
  }

  getTableSource(farmData) {
    // 컬럼명 추출
    const columns = this.getColumns(farmData[0]);
    // 시간 타입 포매팅
    const tableData = this.setDateTimeFormatString(farmData);
    return {columns, tableData};
  }

  setDateTimeFormatString(farmData) {
    for (const row of farmData) {
      for (const key in row) {
        if (key.indexOf("Time") > 0) {
          row[key] = row[key].slice(0, 10);
        }
      }
    }
    return farmData;
  }

  getColumns(row) {
    let columns = new Array();
    for (const key in row) {
      columns.push(key);
    }
    return columns;
  }

}

export default new Farm();

