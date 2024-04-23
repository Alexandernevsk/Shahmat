package com.chess.Shahmat.support.chessfiles.csv.transfer;

import com.chess.Shahmat.support.chessfiles.csv.csvBeans.CsvBean;
import com.chess.Shahmat.support.chessfiles.csv.csvBeans.CsvBeanGameInfo;
import com.opencsv.bean.CsvToBean;
import com.opencsv.bean.CsvToBeanBuilder;

import java.io.Reader;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;

public class CsvTransfer {

    public static List<CsvBean> beanBuilder(Path path, Class<? extends CsvBean> clazz) throws Exception {
        List<CsvBean> csvBeans;
        try (Reader reader = Files.newBufferedReader(path)) {
            CsvToBean<CsvBean> cb = new CsvToBeanBuilder<CsvBean>(reader)
                    .withType(clazz)
                    .build();
            csvBeans = new ArrayList<>(cb.parse());
        }
        return csvBeans;
    }

    public static List<CsvBeanGameInfo> BeanBuilder(Path path, Class<? extends CsvBeanGameInfo> clazz) throws Exception {
        List<CsvBeanGameInfo> csvBeanGameInfoList;
        try (Reader reader = Files.newBufferedReader(path)) {
            CsvToBean<CsvBeanGameInfo> cb = new CsvToBeanBuilder<CsvBeanGameInfo>(reader)
                    .withType(clazz)
                    .build();
            csvBeanGameInfoList = new ArrayList<>(cb.parse());
        }
        return csvBeanGameInfoList;
    }
}
