import React, { useState } from 'react'
import NavbarLogin from '../components/NavbarLogin'
import { useNavigate } from 'react-router-dom'
import PreviewBox from '../components/PreviewBox'
import CounselCard from '../components/CounselCard'
import CounselorCard from '../components/CounselorCard'
import Button from '../components/Button'
import Footer from '../components/Footer'
import Modal from 'react-modal'

export const CounselDetail = () => {
  const navigate = useNavigate()
  const userState: number = 2
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [confirmationText, setConfirmationText] = useState('')

  const ViewAllNotice = () => {
    navigate('/counsel/counselId/notice')
  }
  const ViewAllQna = () => {
    navigate('/counsel/counselId/qna')
  }
  const ViewAllCurriculum = () => {
    alert('더보기')
  }
  const counselButtonClick = () => {
    alert('버튼클릭')
  }
  const onCardClick = () => {
    alert('상담 정보 보기')
  }
  const handleCounselViewClick = () => {
    if (userState === 1) {
      navigate('/testimony/userId')
      window.scrollTo(0, 0)
    } else if (userState === 2) {
      navigate('/counsel/counselId/counselorJournal/:userEmail')
      window.scrollTo(0, 0)
    }
  }
  const editCounselDetail = () => {
    navigate('/counsel/edit/:counselId/')
  }

  const deleteCounselDetail = () => {
    if (confirmationText === '상담 삭제에 동의합니다.') {
      // 회원 탈퇴 로직
      setModalIsOpen(false)
    } else {
      alert('문구를 정확히 입력해주세요.')
    }
  }

  const modalStyles = {
    content: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      alignItems: 'flex-start',
      padding: '0px',
      position: 'absolute' as 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '480px',
      height: '320px',
      borderRadius: '13px',
    },
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={modalStyles}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            padding: '16px',
            gap: '10px',
            width: '448px',
            height: '51px',
            background: '#FFFFFF',
            marginBottom: '-1px',
          }}
        >
          <h2 style={{ font: 'normal 600 16px/19px Inter', color: '#000000' }}>
            정말 <span style={{ color: 'red' }}>삭제 </span>하시겠습니까?
          </h2>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            padding: '16px',
            gap: '10px',
            width: '430px',
            height: '110px',
            background: '#FFFFFF',
            borderTop: '1px solid #CED4DA',
            marginBottom: '-1px',
            marginLeft: '10px',
          }}
        >
          <p
            style={{
              width: '436px',
              height: '78px',
              font: 'normal 400 16px/26px Inter',
              color: '#6C757D',
            }}
          >
            삭제한 상담 내용은 복구할 수 없습니다. 삭제하시려면 아래 문구를
            정확히 따라 입력해주세요.
            <br />
            <span style={{ color: '#FF0000' }}>“상담 삭제에 동의합니다.”</span>
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '16px',
            gap: '8px',
            width: '430px',
            height: '71px',
            background: '#FFFFFF',
            borderTop: '1px solid #CED4DA',
            marginLeft: '10px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'flex-start',
              gap: '8px',
              width: '436px',
              height: '39px',
            }}
          >
            <input
              style={{
                width: '296px',
                height: '39px',
                background: '#FFFFFF',
                border: '1px solid #CED4DA',
                borderRadius: '4px',
              }}
              type="text"
              value={confirmationText}
              onChange={(e) => setConfirmationText(e.target.value)}
            />
            <button
              style={{
                width: '62px',
                height: '39px',
                background: '#6C757D',
                borderRadius: '4px',
                color: '#FFFFFF',
                font: 'normal 600 16px/19px Inter',
              }}
              onClick={() => setModalIsOpen(false)}
            >
              취소
            </button>
            <button
              style={{
                width: '62px',
                height: '39px',
                background: '#80D4FF',
                borderRadius: '4px',
                color: '#FFFFFF',
                font: 'normal 600 16px/19px Inter',
              }}
              onClick={deleteCounselDetail}
            >
              탈퇴
            </button>
          </div>
        </div>
      </Modal>
      <div className="Navbar">
        <NavbarLogin />
      </div>

      <div
        className="top"
        style={{
          display: 'flex',
          height: '500px',
        }}
      >
        <div
          className="top left"
          style={{
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'center',
            margin: '100px 0px 0px 200px ',
            width: '50%',
          }}
        >
          <div className="notice" style={{ marginRight: '60px' }}>
            <PreviewBox
              title="상담 공지사항"
              posts={[
                { title: '[공지] 상담일정 변경 안내' },
                { title: '공지2' },
                { title: '공지3' },
                { title: '공지4' },
              ]}
              onClick={ViewAllNotice}
              width="300px"
              height="235px"
            />
          </div>
          <div className="qna">
            <PreviewBox
              title="상담 Q&A"
              posts={[
                { title: '[공지] 상담일정 변경 안내' },
                { title: '공지2' },
                { title: '공지3' },
                { title: '공지4' },
              ]}
              onClick={ViewAllQna}
              width="300px"
              height="235px"
            />
          </div>
        </div>

        <div
          className="right"
          style={{
            margin: '124px 0px 0px 35px',
          }}
        >
          <div className="right top">
            <CounselCard
              buttonText="결제하기"
              name="석민혁"
              grade={4.8}
              gradeCount={51}
              startTime="10:00"
              endTime="12:30"
              title="족구하자"
              minParticipantCount={4}
              maxParticipantCount={12}
              sessionCount={16}
              price={39000}
              onClick={counselButtonClick}
            />
          </div>
          <div
            className="right middle"
            style={{
              margin: '70px 0px 0px 30px',
            }}
          >
            <CounselorCard
              onCardClick={onCardClick}
              name="이순신"
              grade={4.7}
              gradeCount={45}
              introduce="해상 전략가"
              imgSrc="../image/iesur.jpg"
            />
          </div>
          <div className="right bottom" style={{ margin: '40px 0px 0px 41px' }}>
            {userState !== 0 && (
              <div
                className="counsel journal open"
                style={{ marginBottom: '10px' }}
              >
                <Button
                  size={{ width: '284px', height: '60px' }}
                  text={userState === 1 ? '소감문 보기' : '상담일지 보기'}
                  color={{ background: '#00AAFF', color: 'white' }}
                  onClick={handleCounselViewClick}
                />
              </div>
            )}
            <div className="edit" style={{ marginBottom: '10px' }}>
              <Button
                size={{ width: '284px', height: '60px' }}
                text="수정하기"
                color={{ background: '#40BFFF', color: 'white' }}
                onClick={editCounselDetail}
              />
            </div>
            <div className="delete" style={{ marginBottom: '10px' }}>
              <Button
                size={{ width: '284px', height: '60px' }}
                text="삭제하기"
                color={{ background: '#EF5C5C', color: 'white' }}
                onClick={() => setModalIsOpen(true)}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="middle"
        style={{
          margin: '30px 0px 0px 200px',
          width: '800px',
        }}
      >
        <PreviewBox
          title="상담 커리큘럼"
          posts={[
            { title: '[공지] 상담일정 변경 안내' },
            { title: '공지2' },
            { title: '공지3' },
            { title: '공지4' },
          ]}
          onClick={ViewAllCurriculum}
          width="702px"
          height="235px"
        />
      </div>
      <div
        className="bottom"
        style={{
          margin: '30px 0px 0px 200px ',
        }}
      >
        <div
          style={{
            border: '1px solid #3b478f',
            borderRadius: '13px',
            width: '702px',
            minHeight: '120px',
            padding: '20px',
            position: 'relative',
            background: 'white',
          }}
        >
          <h2 style={{ textAlign: 'left', margin: '0 0 5px 0' }}>상담 소개</h2>
          <hr style={{ borderTop: '2px solid black' }} />
          <div
            style={{
              fontWeight: 'bold',
            }}
          >
            불안을 해결 할 수 있는 방법은 진짜 나를 알아가고, 내가 원하는 인생을
            설계하며, 작은것부터 실천하고 이루어 가는 것입니다. 내 삶에, 내
            고민에는 반드시 내가 있어야 합니다. 인생설계 프로젝트를 통해
            이제부터 나를 알아가고 인정하고 지지해주는 멋진 삶을 만들어 보아요.
          </div>
        </div>
      </div>
      <div
        className="blank"
        style={{
          width: '1440px',
          height: '150px',
        }}
      ></div>
      <Footer />
    </div>
  )
}
