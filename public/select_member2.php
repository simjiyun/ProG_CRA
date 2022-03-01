<?PHP
    header('Content-Type: text/html; charset=utf-8');

    $servername = 'localhost';
    $username = 'horcrux412';
    $password = 'qorgusdk59!';
    $databasename = 'horcrux412';

    $connect = mysqli_connect($servername, $username, $password, $databasename);
    mysqli_set_charset($connect, 'utf8');

    if(!$connect){
        echo 'DATABASE 접속에 실패했습니다. 아래 DATABASE 접속 정보를 확인해주세요.';
        echo '접속 정보 서버이름 : ' . $servername . ' 사용자 : ' . $username . ' 비밀번호 : ' . $password . ' 데이터베이스 이름 : ' . $databasename;
        die('DATABASE 접속에 실패했습니다. 아래 DATABASE 접속 정보를 확인해주세요.');
    }


    $sql = "select * from member_mail2";
    $result = mysqli_query($connect, $sql);

    $arr = array();

    if(mysqli_num_rows($result) >= 1){
        while($row = mysqli_fetch_array($result)){
            array_push($arr, array(
                "이름" => $row['name'],
                "이메일" => $row['mail']
            ));
        }
    }

    $json = json_encode($arr, JSON_UNESCAPED_UNICODE);
    file_put_contents('./data/member_mail2.json', $json);

    echo $json;

    mysqli_close($connect);
?>