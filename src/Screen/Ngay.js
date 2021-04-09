import React, { useState, useEffect, useCallback } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";
import {
  IC_1_10,
  IC_BIEN1,
  IC_BIENFULL, IC_BIT, IC_BUTTON,
  IC_CLOUD,
  IC_DOAM,
  IC_GIO,
  IC_GPS, IC_LINE2,
  IC_MAY,
  IC_MAYMU,
  IC_MUA, IC_PHOTO, IC_RAIN,
  IC_SUB, IC_SUN, IC_TRON,
  IC_UV, IC_VIDEO1, IC_VIDEO2, IC_VIDEO3, IC_VIDEO4, IC_VIDEO5,
} from "../assets";
import Swiper from "react-native-swiper";

const width = Dimensions.get("window").width; // lay width / height cua dien thoai
const height = Dimensions.get("window").height;
// nhớ format code cho dễ nhìn
const St4 = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  color: white;
`;
const App = () => {
  const navigation=useNavigation();
  // useCallback là 1 cái hook dùng để cache lại function để nó tránh bị render lại nhiều lần
  // cái biến deps của nó sẽ dùng để cho biết là nó sẽ được render lại khi nào
  const [danhSachNhietDo, setDanhSachNhietDo] = useState([]);

  const getNhietDo = useCallback(() => {
    setTimeout(() => {
      setDanhSachNhietDo([1, 2, 3, 4, 5, 6, 7, 8]);
    }, 1000); // sau 1s thì làm những công việc bên trong => sau 1s nó mới chạy
  }, [danhSachNhietDo]); // day là deps cái hàm getNhietDo sẽ render lại khi danhsachNhietDoThayDoi

  useEffect(() => {
    getNhietDo(); // gọi hàm getNhietDo để set danh sách nhiệt độ
  }, []); // chạy những công việc bên trong khi màn hình đc mount

  return (
    <Scontainer>
      <LinearGradient
        colors={["transparent", "transparent", "rgba(0,0,0,0.7)"]}
        style={{
          position: "absolute",
          width: width,
          height: height,
          zIndex: -1,
        }} />
      <Image source={IC_BIENFULL}
             resizeMode={"cover"}
             style={{
               position: "absolute",
               width: width,
               height: height,
               top: 0, left: 0, bottom: 0, right: 0,
               zIndex: -2,
             }} />
      <Sscroll>
        <Sbgroud>

          <Sbg1>
            <View style={{ width: 80, padding: 20 }}>
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image source={IC_BUTTON} resizemode={"cover"} style={{ width: 20, height: 20 }} />
              </TouchableOpacity>

            </View>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
              <View style={{ flexDirection: "row", justifyContent: "center", paddingTop: 15 }}>
                <Image resizemode={"contain"} source={IC_GPS} style={{ width: 16, height: 18 }} />
                <Shn>Hà Nội</Shn>
              </View>

              <View style={{ flexDirection: "row", justifyContent: "center", paddingTop: 11 }}>
                <Image resizemode={"contain"} source={IC_CLOUD} style={{ width: 24, height: 24 }} />
                <SdoC>16°C</SdoC>
              </View>
            </View>
            <View style={{ width: 60, padding: 20 }}>
              <TouchableOpacity>
                <Image source={IC_TRON} resizemode={"cover"} style={{ width: 20, height: 20 }} />
              </TouchableOpacity>

            </View>

          </Sbg1>
          <Sbg2>
            <View style={{ flexDirection: "row", justifyContent: "center", paddingBottom: 20 }}>
              <St>Nhiều mưa không mây</St>
            </View>

            <View style={{ width: 380, height: 90, backgroundColor: "rgba(193,6,6,0.6)", alignItems: "center" }}>
              <View style={{ flexDirection: "column", paddingTop: 7, paddingBottom: 7, paddingLeft: 5 }}>
                <Text style={{ color: "#FFFFFF", fontFamily: " Roboto", fontWeight: "bold" }}>TIN KHÔNG KHÍ LẠNH TĂNG
                  CƯỜNG, RÉT VÀ CẢNH BÁO GIÓ MẠNH</Text>
                <St>Không khí lạnh tăng cường</St>
                <St>05/01/2020 9:30</St>
              </View>
            </View>
          </Sbg2>

          <Sbg3>
            <View style={{ paddingLeft: 20, paddingTop: 150 }}>
              <St4>Dự Báo trong ngày</St4>
            </View>

            <View style={{ paddingHorizontal: 30, paddingTop: 40 }}>
              <Image source={IC_LINE2} style={{ width: 345, height: 60 }} />
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-around", paddingTop: 23, paddingHorizontal: 20 }}>
              {
                danhSachNhietDo.map(item => {
                  return (
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                      <Image resizemode={"cover"} source={IC_MAYMU} style={{ width: 16, height: 10 }} />
                      <Sm>10:00</Sm>
                    </View>
                  );
                })
              }
            </View>
          </Sbg3>

          <Sbg4>
            <View style={{ flex: 1, paddingTop: 25 }}>
              <Text style={{ fontWeight: "bold", color: "white" }}>TP. Hà Nội</Text>
              <Text style={{ color: "white" }}>Dự Báo trong 3 giờ tới</Text>
            </View>
            <View style={{ flex: 2, flexDirection: "row", paddingTop: 30 }}>
              <View style={{
                flex: 0.7,
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "space-around",
              }}>
                <Image resizeMode="cover" source={IC_MUA} style={{ width: 36, height: 36 }} />
                <Image resizeMode="cover" source={IC_GIO} style={{ width: 36, height: 36 }} />
              </View>
              <View style={{
                flex: 2.3,
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "space-around",
              }}>
                <View style={{ paddingBottom: 10, paddingLeft: 10 }}>
                  <ST3>50°C</ST3>
                  <ST2>Xác xuất có mưa</ST2>
                </View>
                <View style={{ paddingLeft: 10 }}>
                  <ST1>1.25 m/s</ST1>
                  <ST2>Tốc độ gió</ST2>
                </View>
              </View>
              <View style={{
                flex: 0.7,
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "space-around",
                paddingLeft: 20,
              }}>
                <Image resizeMode="cover" source={IC_DOAM} style={{ width: 36, height: 36 }} />
                <Image resizeMode="cover" source={IC_UV} style={{ width: 36, height: 36 }} />
              </View>
              <View style={{
                flex: 2.3,
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "space-around",
              }}>
                <View style={{ paddingBottom: 30, paddingLeft: 10 }}>
                  <ST1>91.3 %</ST1>
                  <ST2>Độ ẩm</ST2>
                </View>
                <View style={{ paddingLeft: 10 }}>
                  <ST1>3.5</ST1>
                  <ST2>Chỉ số UV</ST2>
                </View>
              </View>
            </View>
          </Sbg4>

        </Sbgroud>
        <S7ngay>
          <S7view>
            <Stext>Dự báo 7 ngày tới</Stext>
          </S7view>

          <S7view>
            <View style={{ width: 160 }}>
              <Stextday>Thứ tư</Stextday>
            </View>

            <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}>
              <Image source={IC_MAY} style={{ width: 14, height: 14 }} />
            </View>

            <View style={{ width: 80, flexDirection: "row", alignItems: "center", justifyContent: "flex-end" }}>
              <Text style={{ fontWeight: "bold", color: "white", paddingRight: 20 }}>16°</Text>
              <Text style={{ fontWeight: "bold", color: "white" }}>19°</Text>
            </View>
          </S7view>


          <S7view>
            <View style={{ width: 160 }}>
              <Stextday>Thứ năm</Stextday>
            </View>

            <View style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
            }}>
              <S7am>50 %</S7am>
              <Image source={IC_RAIN} style={{ width: 14, height: 14 }} />
            </View>

            <View style={{ width: 80, flexDirection: "row", alignItems: "center", justifyContent: "flex-end" }}>
              <Text style={{ fontWeight: "bold", color: "white", paddingRight: 20 }}>15°</Text>
              <Text style={{ fontWeight: "bold", color: "white" }}>16°</Text>
            </View>

          </S7view>

          <S7view>
            <View style={{ width: 160 }}>
              <Stextday>Thứ sáu</Stextday>
            </View>

            <View style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
            }}>
              <S7am>30 %</S7am>
              <Image source={IC_RAIN} style={{ width: 14, height: 14 }} />
            </View>

            <View style={{ width: 80, flexDirection: "row", alignItems: "center", justifyContent: "flex-end" }}>
              <Text style={{ fontWeight: "bold", color: "white", paddingRight: 20 }}>10°</Text>
              <Text style={{ fontWeight: "bold", color: "white" }}>13°</Text>
            </View>

          </S7view>

          <S7view>
            <View style={{ width: 160 }}>
              <Stextday>Thứ bảy</Stextday>
            </View>

            <View style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
            }}>
              <S7am>30 %</S7am>
              <Image source={IC_RAIN} style={{ width: 14, height: 14 }} />
            </View>

            <View style={{ width: 80, flexDirection: "row", alignItems: "center", justifyContent: "flex-end" }}>
              <Text style={{ fontWeight: "bold", color: "white", paddingRight: 20 }}>12°</Text>
              <Text style={{ fontWeight: "bold", color: "white" }}>14°</Text>
            </View>

          </S7view>

          <S7view>
            <View style={{ width: 160 }}>
              <Stextday>Chủ nhật</Stextday>
            </View>

            <View style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
            }}>
              <S7am>30 %</S7am>
              <Image source={IC_RAIN} style={{ width: 14, height: 14 }} />
            </View>

            <View style={{ width: 80, flexDirection: "row", alignItems: "center", justifyContent: "flex-end" }}>
              <Text style={{ fontWeight: "bold", color: "white", paddingRight: 20 }}>12°</Text>
              <Text style={{ fontWeight: "bold", color: "white" }}>14°</Text>
            </View>

          </S7view>

          <S7view>
            <View style={{ width: 160 }}>
              <Stextday>Thứ hai</Stextday>
            </View>

            <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-end"}}>
              <Image source={IC_MAY} style={{ width: 14, height: 14 }} />
            </View>

            <View style={{ width: 80, flexDirection: "row", alignItems: "center", justifyContent: "flex-end" }}>
              <Text style={{ fontWeight: "bold", color: "white", paddingRight: 20 }}>12°</Text>
              <Text style={{ fontWeight: "bold", color: "white" }}>14°</Text>
            </View>
          </S7view>

          <S7view>
            <View style={{ width: 160 }}>
              <Stextday>Thứ ba</Stextday>
            </View>

            <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}>
              <Image source={IC_SUN} style={{ width: 14, height: 14 }} />
            </View>

            <View style={{ width: 80, flexDirection: "row", alignItems: "center", justifyContent: "flex-end" }}>
              <Text style={{ fontWeight: "bold", color: "white", paddingRight: 20 }}>16°</Text>
              <Text style={{ fontWeight: "bold", color: "white" }}>19°</Text>
            </View>
          </S7view>


        </S7ngay>
        <View style={{ height: 16, backgroundColor: "#0e1e2d" }}></View>
        <Svideo>
          <View style={{ paddingHorizontal: 20, paddingVertical: 12 }}>
            <Text style={{ fontWeight: "bold", color: "white" }}>VIDEO DỰ BÁO THỜI TIẾT </Text>
          </View>
          <View>
            <Image source={IC_VIDEO1} style={{ width: width }} resizemode={"stretch"} />
          </View>
          <View
            style={{ paddingHorizontal: 20, borderBottomWidth: 0.7, borderBottomColor: "rgba(255, 255, 255, 0.2)" }}>
            <Text style={{ marginVertical: 10, color: "white", fontWeight: "bold" }}>Dự báo thời tiết ngày 4/1, thiên
              tai, lũ lụt, khắc phục hậu quả sau bão | VTV TST</Text>
          </View>
          <View style={{ height: 230 }}>
            <Swiper>
              <View style={{ height: 188, flexDirection: "column" }}>
                <TouchableOpacity style={{
                  flex: 5,
                  flexDirection: "row",
                  alignItems: "center",
                  borderBottomWidth: 0.7,
                  borderBottomColor: "rgba(255, 255, 255, 0.2)",
                }}>
                  <View style={{ flex: 1.9, paddingLeft: 20 }}>
                    <Text style={{ color: "white" }}>Dự báo thời tiết ngày 4/1, thiên tai, lũ lụt, khắc phục hậu quả sau
                      bão | VTV TST</Text>
                  </View>
                  <View style={{ flex: 1.1, paddingLeft: 20 }}>
                    <Image source={IC_VIDEO2} style={{ width: 120, height: 75 }} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={{
                  flex: 5,
                  flexDirection: "row",
                  alignItems: "center",
                  borderBottomWidth: 0.7,
                  borderBottomColor: "rgba(255, 255, 255, 0.2)",
                }}>
                  <View style={{ flex: 1.9, paddingLeft: 20 }}>
                    <Text style={{ color: "white" }}>Thời sự ngày 5/1|Dự báo thời tiết hôm nay |Tin tức 24h mới nhất hôm
                      nay</Text>
                  </View>
                  <View style={{ flex: 1.1, paddingLeft: 20 }}>
                    <Image source={IC_VIDEO3} style={{ width: 120, height: 75 }} />
                  </View>
                </TouchableOpacity>
              </View>

              <View style={{ height: 188, flexDirection: "column" }}>
                <TouchableOpacity style={{
                  flex: 5,
                  flexDirection: "row",
                  alignItems: "center",
                  borderBottomWidth: 0.7,
                  borderBottomColor: "rgba(255, 255, 255, 0.2)",
                }}>
                  <View style={{ flex: 1.9, paddingLeft: 20 }}>
                    <Text style={{ color: "white" }}>Dự báo thời tiết ngày 4/1, thiên tai, lũ lụt, khắc phục hậu quả sau
                      bão | VTV TST</Text>
                  </View>
                  <View style={{ flex: 1.1, paddingLeft: 20 }}>
                    <Image source={IC_VIDEO2} style={{ width: 120, height: 75 }} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={{
                  flex: 5,
                  flexDirection: "row",
                  alignItems: "center",
                  borderBottomWidth: 0.7,
                  borderBottomColor: "rgba(255, 255, 255, 0.2)",
                }}>
                  <View style={{ flex: 1.9, paddingLeft: 20 }}>
                    <Text style={{ color: "white" }}>Thời sự ngày 5/1|Dự báo thời tiết hôm nay |Tin tức 24h mới nhất hôm
                      nay</Text>
                  </View>
                  <View style={{ flex: 1.1, paddingLeft: 20 }}>
                    <Image source={IC_VIDEO3} style={{ width: 120, height: 75 }} />
                  </View>
                </TouchableOpacity>
              </View>

              <View style={{ height: 188, flexDirection: "column" }}>
                <TouchableOpacity style={{
                  flex: 5,
                  flexDirection: "row",
                  alignItems: "center",
                  borderBottomWidth: 0.7,
                  borderBottomColor: "rgba(255, 255, 255, 0.2)",
                }}>
                  <View style={{ flex: 1.9, paddingLeft: 20 }}>
                    <Text style={{ color: "white" }}>Dự báo thời tiết ngày 4/1, thiên tai, lũ lụt, khắc phục hậu quả sau
                      bão | VTV TST</Text>
                  </View>
                  <View style={{ flex: 1.1, paddingLeft: 20 }}>
                    <Image source={IC_VIDEO2} style={{ width: 120, height: 75 }} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={{
                  flex: 5,
                  flexDirection: "row",
                  alignItems: "center",
                  borderBottomWidth: 0.7,
                  borderBottomColor: "rgba(255, 255, 255, 0.2)",
                }}>
                  <View style={{ flex: 1.9, paddingLeft: 20 }}>
                    <Text style={{ color: "white" }}>Thời sự ngày 5/1|Dự báo thời tiết hôm nay |Tin tức 24h mới nhất hôm
                      nay</Text>
                  </View>
                  <View style={{ flex: 1.1, paddingLeft: 20 }}>
                    <Image source={IC_VIDEO3} style={{ width: 120, height: 75 }} />
                  </View>
                </TouchableOpacity>
              </View>


            </Swiper>
          </View>
        </Svideo>

        <View style={{ height: 16, backgroundColor: "#0e1e2d" }}></View>

        <Svideo>
          <View
            style={{
              paddingHorizontal: 20,
              paddingVertical: 12,
              borderBottomWidth: 0.7,
              borderBottomColor: "rgba(255, 255, 255, 0.2)",
            }}>
            <Text style={{ fontWeight: "bold", color: "white" }}>BẢN TIN CHUYÊN ĐỀ</Text>
          </View>
          <View style={{ height: 260 }}>
            <Swiper>
              <View style={{ height: 220, flexDirection: "column" }}>
                <TouchableOpacity style={{
                  flex: 5,
                  flexDirection: "row",
                  alignItems: "center",
                  borderBottomWidth: 0.7,
                  borderBottomColor: "rgba(255, 255, 255, 0.2)",
                }}>
                  <View style={{ flex: 1.9, paddingLeft: 20 }}>
                    <Text style={{ color: "white", fontWeight: "bold" }}>Tin cảnh báo gió mạnh và sóng lớn trên
                      biên</Text>
                    <Text style={{ color: "white" }}>Cảnh báo cấp độ rủi ro thiên tai do gió mạnh trên biển cấp:1</Text>
                  </View>
                  <View style={{ flex: 1.1, paddingLeft: 20 }}>
                    <Image source={IC_VIDEO4} style={{ width: 120, height: 75 }} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={{
                  flex: 5,
                  flexDirection: "row",
                  alignItems: "center",
                  borderBottomWidth: 0.7,
                  borderBottomColor: "rgba(255, 255, 255, 0.2)",
                }}>
                  <View style={{ flex: 1.9, paddingLeft: 20 }}>
                    <Text style={{ color: "white", fontWeight: "bold" }}>Tin không khí lạnh tăng cường, rét và cảnh báo
                      gió mạnh, sóng lớn trên biển </Text>
                    <Text style={{ color: "white" }}>Hiện nay (05/1), ở phía Bắc có một bộ phận không khí lạnh mạnh đang
                      di chuyển xuống phía Nam</Text>
                  </View>
                  <View style={{ flex: 1.1, paddingLeft: 20 }}>
                    <Image source={IC_VIDEO5} style={{ width: 120, height: 75 }} />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ height:220, flexDirection: "column" }}>
                <TouchableOpacity style={{
                  flex: 5,
                  flexDirection: "row",
                  alignItems: "center",
                  borderBottomWidth: 0.7,
                  borderBottomColor: "rgba(255, 255, 255, 0.2)",
                }}>
                  <View style={{ flex: 1.9, paddingLeft: 20 }}>
                    <Text style={{ color: "white", fontWeight: "bold" }}>Tin cảnh báo gió mạnh và sóng lớn trên
                      biên</Text>
                    <Text style={{ color: "white" }}>Cảnh báo cấp độ rủi ro thiên tai do gió mạnh trên biển cấp:1</Text>
                  </View>
                  <View style={{ flex: 1.1, paddingLeft: 20 }}>
                    <Image source={IC_VIDEO4} style={{ width: 120, height: 75 }} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={{
                  flex: 5,
                  flexDirection: "row",
                  alignItems: "center",
                  borderBottomWidth: 0.7,
                  borderBottomColor: "rgba(255, 255, 255, 0.2)",
                }}>
                  <View style={{ flex: 1.9, paddingLeft: 20 }}>
                    <Text style={{ color: "white", fontWeight: "bold" }}>Tin không khí lạnh tăng cường, rét và cảnh báo
                      gió mạnh, sóng lớn trên biển </Text>
                    <Text style={{ color: "white" }}>Hiện nay (05/1), ở phía Bắc có một bộ phận không khí lạnh mạnh đang
                      di chuyển xuống phía Nam</Text>
                  </View>
                  <View style={{ flex: 1.1, paddingLeft: 20 }}>
                    <Image source={IC_VIDEO5} style={{ width: 120, height: 75 }} />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ height: 220, flexDirection: "column" }}>
                <TouchableOpacity style={{
                  flex: 5,
                  flexDirection: "row",
                  alignItems: "center",
                  borderBottomWidth: 0.7,
                  borderBottomColor: "rgba(255, 255, 255, 0.2)",
                }}>
                  <View style={{ flex: 1.9, paddingLeft: 20 }}>
                    <Text style={{ color: "white", fontWeight: "bold" }}>Tin cảnh báo gió mạnh và sóng lớn trên
                      biên</Text>
                    <Text style={{ color: "white" }}>Cảnh báo cấp độ rủi ro thiên tai do gió mạnh trên biển cấp:1</Text>
                  </View>
                  <View style={{ flex: 1.1, paddingLeft: 20 }}>
                    <Image source={IC_VIDEO4} style={{ width: 120, height: 75 }} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={{
                  flex: 5,
                  flexDirection: "row",
                  alignItems: "center",
                  borderBottomWidth: 0.7,
                  borderBottomColor: "rgba(255, 255, 255, 0.2)",
                }}>
                  <View style={{ flex: 1.9, paddingLeft: 20 }}>
                    <Text style={{ color: "white", fontWeight: "bold" }}>Tin không khí lạnh tăng cường, rét và cảnh báo
                      gió mạnh, sóng lớn trên biển </Text>
                    <Text style={{ color: "white" }}>Hiện nay (05/1), ở phía Bắc có một bộ phận không khí lạnh mạnh đang
                      di chuyển xuống phía Nam</Text>
                  </View>
                  <View style={{ flex: 1.1, paddingLeft: 20 }}>
                    <Image source={IC_VIDEO5} style={{ width: 120, height: 75 }} />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ height: 220, flexDirection: "column" }}>
                <TouchableOpacity style={{
                  flex: 5,
                  flexDirection: "row",
                  alignItems: "center",
                  borderBottomWidth: 0.7,
                  borderBottomColor: "rgba(255, 255, 255, 0.2)",
                }}>
                  <View style={{ flex: 1.9, paddingLeft: 20 }}>
                    <Text style={{ color: "white", fontWeight: "bold" }}>Tin cảnh báo gió mạnh và sóng lớn trên
                      biên</Text>
                    <Text style={{ color: "white" }}>Cảnh báo cấp độ rủi ro thiên tai do gió mạnh trên biển cấp:1</Text>
                  </View>
                  <View style={{ flex: 1.1, paddingLeft: 20 }}>
                    <Image source={IC_VIDEO4} style={{ width: 120, height: 75 }} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={{
                  flex: 5,
                  flexDirection: "row",
                  alignItems: "center",
                  borderBottomWidth: 0.7,
                  borderBottomColor: "rgba(255, 255, 255, 0.2)",
                }}>
                  <View style={{ flex: 1.9, paddingLeft: 20 }}>
                    <Text style={{ color: "white", fontWeight: "bold" }}>Tin không khí lạnh tăng cường, rét và cảnh báo
                      gió mạnh, sóng lớn trên biển </Text>
                    <Text style={{ color: "white" }}>Hiện nay (05/1), ở phía Bắc có một bộ phận không khí lạnh mạnh đang
                      di chuyển xuống phía Nam</Text>
                  </View>
                  <View style={{ flex: 1.1, paddingLeft: 20 }}>
                    <Image source={IC_VIDEO5} style={{ width: 120, height: 75 }} />
                  </View>
                </TouchableOpacity>
              </View>
            </Swiper>
          </View>
        </Svideo>

        <View style={{ height: 16, backgroundColor: "#0e1e2d" }}></View>


        <View style={{ flexDirection: "row", backgroundColor: "#193654" }}>
          <View style={{ width: 350, paddingHorizontal: 20, paddingVertical: 12 }}>
            <Text style={{ fontWeight: "bold", color: "white" }}>VIDEO DỰ BÁO THỜI TIẾT </Text>
          </View>
          <View style={{ flex: 1 }}></View>
          <TouchableOpacity style={{ width: 80, alignItems: "center", justifyContent: "center" }}>
            <Image source={IC_PHOTO} />
          </TouchableOpacity>
        </View>

        <View>
          <Image source={IC_BIT} style={{ width: width }} />
        </View>

        <View style={{ flexDirection: "row", backgroundColor: "#193654" }}>
          <View style={{ width: 350, paddingHorizontal: 20, paddingVertical: 12 }}>
            <Text style={{ color: "white" }}>Nhiệt độ ngoài trời Hà nội thấp nhất là 12°</Text>
          </View>
          <View style={{ flex: 1 }}></View>
          <TouchableOpacity style={{ width: 80, alignItems: "center", justifyContent: "center" }}>
            <Image source={IC_1_10} resizemode={"cover"} />
          </TouchableOpacity>
        </View>

      </Sscroll>
    </Scontainer>

  );
};
const Scontainer = styled(View)`
  flex: 1;
  background-color: #193654;
  flex-direction: column;
`;
const Sscroll = styled(ScrollView)`
`;
const Sbgroud = styled.View`
  flex: 1;
  flex-direction: column;
`;
const Shn = styled(Text)`
  font-size: 18px;
  color: white;
  margin-left: 10px;
`;
const SdoC = styled(Text)`
  font-size: 30px;
  font-weight: bold;
  color: #FFFFFF;
  margin-left: 10px;
`;
const St = styled(Text)`
  font-size: 14px;
  color: #FFFFFF;
`;
const Sbg1 = styled(View)`
  flex: 1.5;
  flex-direction: row;
`;
const Sbg2 = styled(View)`
  flex: 2.5;
  padding: 8px 18px 18px 18px;
`;
const Sbg3 = styled(View)`
  flex: 3;
`;
const Sbg4 = styled(View)`
  flex: 3;
  padding: 20px 20px 20px 20px;
`;
const Sm = styled(Text)`
  font-size: 12px;
  color: white;
  padding-top: 10px;
`;
const ST3 = styled(Text)`
  font-size: 14px;
  font-weight: bold;
  color: #86EFFD;
`;
const ST2 = styled(Text)`
  font-size: 13px;
  color: white;
`;
const ST1 = styled(Text)`
  font-size: 14px;
  font-weight: bold;
  color: white;
`;
const S7ngay = styled.View`
  background-color: #193654;
  justify-content: center;
`;
const Stext = styled.Text`
  font-size: 14px;
  font-weight: bold;
  padding-top: 20px;
  padding-bottom: 10px;
  color: white;
`;
const S7view = styled(View)`
  padding-left: 20px;
  padding-right: 20px;
  flex-direction: row;
  border-bottom-width: 0.7px;
  border-bottom-color: rgba(255, 255, 255, 0.2);
`;
const Stextday = styled(Text)`
  font-size: 14px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: white;
`;
const S7am = styled(Text)`
  color: #86EFFD;
  font-weight: bold;
  padding-right: 10px;
`;
const Svideo = styled(View)`
  flex-direction: column;
  backgroundColor: #193654;
`;


export default App;
